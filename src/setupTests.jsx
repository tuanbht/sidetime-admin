import React from 'react';
import { vi } from 'vitest';

vi.mock('react-use-intercom', () => {
  const mockIntercomProvider = ({ children }) => (
    <div>
      <div>Intercom Provider</div>
      {children}
    </div>
  );

  return {
    IntercomProvider: mockIntercomProvider,
    useIntercom: () => ({
      shutdown: vi.fn(),
      boot: vi.fn(),
    }),
  };
});
