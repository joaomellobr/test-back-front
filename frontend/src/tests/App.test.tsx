import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app wrapper', () => {
  render(<App />);
  expect(screen.getByText(/Filter by client/i)).toBeInTheDocument();
});