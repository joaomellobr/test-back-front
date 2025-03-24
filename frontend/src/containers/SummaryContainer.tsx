import React, { useState } from 'react';
import { useTimesheetSummary } from '../hooks/useTimesheetSummary';
import SummaryTable from '../components/SummaryTable';
import Spinner from '../design-system/Spinner';
import Alert from '../design-system/Alert';
import Container from '../design-system/Container';
import FilterInput from '../components/FilterInput';
import { styled } from 'styled-components';
import DetailsModal from '../components/DetailsModal';
import { TimesheetEntry, TimesheetSummary } from '../types';
import api from '../services/api';

const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  color: #6b7280;
  font-size: 0.9rem;
`;

const Value = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
`;

const FilterAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;


const SummaryContainer = () => {
  const { summary, loading, error } = useTimesheetSummary();
  const [filter, setFilter] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<TimesheetEntry | null>(null);

  if (loading) return <Spinner />;
  if (error) return <Alert message={error} />;

  const onView = async (summary: TimesheetSummary) => {
    const response = await api.get(`/entries?client=${summary.client}`);
    const fullEntries: TimesheetEntry[] = response.data;
  
    const first = fullEntries[0]; // ou use um modal com lista
    setSelectedEntry(first);
  };

  const filteredSummary = summary.filter((entry) =>
    entry.client.toLowerCase().includes(filter.toLowerCase())
  );

  const totalHours = filteredSummary.reduce((acc, e) => acc + e.hours, 0).toFixed(2);
  const totalBillableAmount = filteredSummary
    .reduce((acc, e) => acc + e.billable_amount, 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <Container>
      <SummaryHeader>
        <Metric>
          <Label>Hours Tracked</Label>
          <Value>{totalHours}</Value>
        </Metric>
        <Metric>
          <Label>Billable Amount</Label>
          <Value>{totalBillableAmount}</Value>
        </Metric>
      </SummaryHeader>

      <FilterAlign>
        <FilterInput value={filter} onChange={setFilter} />
      </FilterAlign>

      <SummaryTable data={filteredSummary} onView={onView} />

      {selectedEntry && (
      <DetailsModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        onSave={(updated) => {
          console.log('Salvar no backend:', updated); // aqui pode integrar depois
        }}
      />
    )}

    </Container>
  );
};

export default SummaryContainer;
