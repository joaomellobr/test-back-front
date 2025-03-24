import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { TimesheetEntry } from '../types';

interface Props {
  entry: TimesheetEntry;
  onClose: () => void;
  onSave: (updated: TimesheetEntry) => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 500px;
`;

const FieldGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
`;

const ReadOnly = styled.div`
  padding: 0.6rem;
  background: #f3f3f3;
  border-radius: 4px;
  font-size: 0.95rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const SaveButton = styled(Button)`
  background: #2563eb;
  color: white;
`;

const CancelButton = styled(Button)`
  background: #e5e7eb;
`;

const DetailsModal: React.FC<Props> = ({ entry, onClose, onSave }) => {
  const [form, setForm] = useState({
    date: entry.date,
    hours: entry.hours,
    billable: entry.billable,
    billable_rate: entry.billable_rate,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSave({ ...entry, ...form });
    onClose();
  };

  return ReactDOM.createPortal(
    <Overlay>
      <ModalBox>
        <h3>Edit Entry</h3>
        <FieldGroup>
          <Label>Date</Label>
          <Input name="date" value={form.date} onChange={handleChange} />
        </FieldGroup>
        <FieldGroup>
          <Label>Hours</Label>
          <Input name="hours" type="number" value={form.hours} onChange={handleChange} />
        </FieldGroup>
        <FieldGroup>
          <Label>Billable</Label>
          <Input name="billable" type="checkbox" checked={form.billable} onChange={handleChange} />
        </FieldGroup>
        <FieldGroup>
          <Label>Billable Rate</Label>
          <Input name="billable_rate" type="number" value={form.billable_rate} onChange={handleChange} />
        </FieldGroup>

        {/* Read-only fields */}
        <FieldGroup>
          <Label>Client</Label>
          <ReadOnly>{entry.client}</ReadOnly>
        </FieldGroup>
        <FieldGroup>
          <Label>Project</Label>
          <ReadOnly>{entry.project}</ReadOnly>
        </FieldGroup>
        <FieldGroup>
          <Label>Project Code</Label>
          <ReadOnly>{entry.project_code}</ReadOnly>
        </FieldGroup>
        <FieldGroup>
          <Label>First Name</Label>
          <ReadOnly>{entry.first_name}</ReadOnly>
        </FieldGroup>
        <FieldGroup>
          <Label>Last Name</Label>
          <ReadOnly>{entry.last_name}</ReadOnly>
        </FieldGroup>

        <ButtonGroup>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSubmit}>Save</SaveButton>
        </ButtonGroup>
      </ModalBox>
    </Overlay>,
    document.body
  );
};

export default DetailsModal;
