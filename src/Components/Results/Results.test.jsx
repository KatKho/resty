import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Results from './index';  

test('Displays loading when loading prop is true', () => {
  render(<Results loading={true} data={null} />);
  expect(screen.getByText('Loading...')).toBeDefined();
});

test('Displays JSONPretty when data is present and not loading', () => {
    const mockData = { key: 'value' };
    const { container } = render(<Results loading={false} data={mockData} />);
    
    // Search by id
    const jsonPrettyElement = container.querySelector('#json-pretty');
    expect(jsonPrettyElement).toBeDefined();
    
    // Validate the mockData content
    expect(jsonPrettyElement.textContent).toContain('key');
    expect(jsonPrettyElement.textContent).toContain('value');
  });

test('Does not display JSONPretty when loading', () => {
  const mockData = { key: 'value' };
  render(<Results loading={true} data={mockData} />);
  
  const jsonPrettyElement = screen.queryByTestId('json-pretty');
  expect(jsonPrettyElement).toBeNull();
});
