import React from 'react';
import { render, screen} from '@testing-library/react';
import History from './index';

describe('History component', () => {
  test('renders API Call History header', () => {
    render(<History history={[]} onClick={() => {}} />);
    expect(screen.getByText('API Call History')).toBeInTheDocument();
  });

  test('renders each history entry', () => {
    const mockHistory = [
      { method: 'GET', url: 'https://api.example.com/data' },
      { method: 'POST', url: 'https://api.example.com/post' }
    ];
    render(<History history={mockHistory} onClick={() => {}} />);
    
    expect(screen.getByText('GET')).toBeInTheDocument();
    expect(screen.getByText('https://api.example.com/data')).toBeInTheDocument();
    expect(screen.getByText('POST')).toBeInTheDocument();
    expect(screen.getByText('https://api.example.com/post')).toBeInTheDocument();
  });

  test('renders selected history data', () => {
    const mockDisplayedData = { key: 'value' };
    render(<History history={[]} onClick={() => {}} displayedData={mockDisplayedData} />);
    
    expect(screen.getByText('Selected History Data:')).toBeInTheDocument();
    
  });
});
