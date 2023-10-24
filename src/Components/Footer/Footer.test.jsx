import { render, screen } from '@testing-library/react';
import Footer from './index'; 

describe('Testing the Footer component', () => {
  test('should render copyright symbol and year', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/© 2018/i);
    expect(footerElement).toBeInTheDocument();
  });
});
