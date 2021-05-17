import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dashboard', async () => {
  render(<App />);
  const elements = await screen.findAllByText('Dashboard');
  expect(elements[0]).toBeInTheDocument();
});
