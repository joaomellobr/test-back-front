import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const StyledInput = styled.input`
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 250px;
  font-size: 0.95rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.2);
  }
`;

const FilterInput: React.FC<Props> = ({ value, onChange }) => (
  <StyledInput
    type="text"
    placeholder="Filter by client..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default FilterInput;
