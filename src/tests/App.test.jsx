import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('renders all components', () => {
  render(<App />);

  expect(screen.getByTestId('header')).toBeDefined();
  expect(screen.getByTestId('footer')).toBeDefined();
  expect(screen.getByTestId('form')).toBeDefined();
});

test('displays correct Request Method and URL after API call', async () => {
  render(<App />);

  fireEvent.click(screen.getByText('GO!'));
  
  await waitFor(() => {
    expect(screen.getByTestId('request-method').textContent).toBe('Request Method: GET');
    const allUrlElements = screen.getAllByText(/URL:/);
    expect(allUrlElements.length).toBeGreaterThan(0); // or some other logic to identify the one you want

  });
});

test('displays Results data correctly after API call', async () => {
  render(<App />);

  fireEvent.click(screen.getByText('GO!'));
  
  await waitFor(() => {
    const resultsData = screen.getByTestId('results-data');
    expect(resultsData).toBeDefined();
  });
});
