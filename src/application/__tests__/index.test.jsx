import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import Application from '..';

describe('application', () => {
  it('renders template', async () => {
    await waitFor(() => {
      expect(render(<Application />)).toMatchSnapshot();
    });
  });
});
