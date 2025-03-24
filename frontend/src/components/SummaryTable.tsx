import React from 'react';
import { TimesheetSummary } from '../types';
import Table from '../design-system/Table';
import TableHead from '../design-system/TableHead';
import TableBody from '../design-system/TableBody';
import TableRow from '../design-system/TableRow';
import TableCell from '../design-system/TableCell';
import styled from 'styled-components';


interface Props {
    data: TimesheetSummary[];
    onView: (entry: TimesheetSummary) => void;
}

const Percentage = styled.span`
  color: #6b7280; // Gray-600
  font-size: 0.8rem;
  margin-left: 4px;
`;

const SummaryTable: React.FC<Props> = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow isHeader>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">Client</TableCell>
        <TableCell as="th" align="right">Hours</TableCell>
        <TableCell as="th" align="right">Billable Hours</TableCell>
        <TableCell as="th" align="right">Billable Amount</TableCell>
        <TableCell as="th" align="right"></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((entry, idx) => (
        <TableRow key={idx}>
            <TableCell>{entry.name}</TableCell>
            <TableCell>{entry.client}</TableCell>
            <TableCell align="right">{entry.hours.toFixed(2)}</TableCell>
            <TableCell align="right">
            {entry.billable_hours.toFixed(2)}
            {entry.hours > 0 && (
                <Percentage>
                ({Math.round((entry.billable_hours / entry.hours) * 100)}%)
                </Percentage>
            )}
            </TableCell>
            <TableCell align="right">
            {entry.billable_amount === 0
                ? '–'
                : entry.billable_amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}
            </TableCell>
            <TableCell>
                <button onClick={() => {}}>View Details</button>
            </TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default SummaryTable;
