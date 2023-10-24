import { expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './index';  

test('Form renders correctly', () => {
  const mockHandleApiCall = () => {};
  render(<Form handleApiCall={mockHandleApiCall} />);
  
  expect(screen.getByLabelText(/URL:/i)).toBeDefined();
  expect(screen.getByText('GET')).toBeDefined();
  expect(screen.getByText('POST')).toBeDefined();
  expect(screen.getByText('PUT')).toBeDefined();
  expect(screen.getByText('DELETE')).toBeDefined();
  expect(screen.getByText('GO!')).toBeDefined();
});

test('Textarea appears when method is POST', () => {
  const mockHandleApiCall = () => {};
  render(<Form handleApiCall={mockHandleApiCall} />);
  
  fireEvent.click(screen.getByText('POST'));
  expect(screen.getByPlaceholderText('Enter JSON data here')).toBeDefined();
});

  test('textarea appears when method is PUT', () => {
    const mockHandleApiCall = () => {};
    render(<Form handleApiCall={mockHandleApiCall} />);
    fireEvent.click(screen.getByText('PUT'));
    expect(screen.getByPlaceholderText('Enter JSON data here')).toBeInTheDocument();
  });

  test('textarea disappears when method is GET or DELETE', () => {
    const mockHandleApiCall = () => {};
    render(<Form handleApiCall={mockHandleApiCall} />);
    fireEvent.click(screen.getByText('POST'));
    fireEvent.click(screen.getByText('GET'));
    expect(screen.queryByPlaceholderText('Enter JSON data here')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('PUT'));
    fireEvent.click(screen.getByText('DELETE'));
    expect(screen.queryByPlaceholderText('Enter JSON data here')).not.toBeInTheDocument();
  });

  