import React from 'react';
import Table from '../design-system/Table';
import TableHead from '../design-system/TableHead';
import TableBody from '../design-system/TableBody';
import TableRow from '../design-system/TableRow';
import TableCell from '../design-system/TableCell';
import { TimesheetSummary } from '../types';

interface Props {
  entries: TimesheetSummary[];
  onDelete: (id: number) => void;
}

const TimesheetTable: React.FC<Props> = ({ entries, onDelete }) => {
  return (
    <Table>
      <TableHead >
        <TableRow isHeader>
          <TableCell>Name</TableCell>
          <TableCell>Client</TableCell>
          <TableCell>Hours</TableCell>
          <TableCell>Billable Hours</TableCell>
          <TableCell>Billable Amount</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map((e) => (
          <TableRow key={e.client}>
            <TableCell>{e.client}</TableCell>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.hours}</TableCell>
            <TableCell>{e.billable_hours}</TableCell>
            <TableCell>{e.billable_amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TimesheetTable;