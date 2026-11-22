import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders the main navigation links', () => {
  render(<Header />);
  expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Menu').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Contact Us').length).toBeGreaterThan(0);
});
