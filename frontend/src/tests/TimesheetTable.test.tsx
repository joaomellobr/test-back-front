import { render, screen } from '@testing-library/react';
import TimesheetTable from '../components/TimesheetTable';

test('renders table headers', () => {
  render(<TimesheetTable entries={[]} onDelete={() => {}} />);
  expect(screen.getByText(/Date/i)).toBeInTheDocument();
  expect(screen.getByText(/Client/i)).toBeInTheDocument();
});