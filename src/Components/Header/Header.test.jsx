import { render, screen } from '@testing-library/react';
import Header from './index'; 

describe('Testing the Header component', () => {
  test('should render RESTy', () => {
    render(<Header />);
    const footerElement = screen.getByText(/RESTy/i);
    expect(footerElement).toBeInTheDocument();
  });
});