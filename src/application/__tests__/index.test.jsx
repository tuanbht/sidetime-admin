import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import Application from '..';
import { mockAxios } from '../../configurations/test';

describe('application', () => {
  it('renders template', async () => {
    mockAxios.onGet().reply(200, []);
    const { container } = render(<Application />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
