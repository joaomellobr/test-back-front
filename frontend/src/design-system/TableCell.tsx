import styled from 'styled-components';

interface Props {
  align?: 'left' | 'center' | 'right';
}

const TableCell = styled.td.attrs((props: any) => ({
  as: props.as || 'td',
}))<Props>`
  padding: 12px 16px;
  border: 1px solid #ddd;
  font-weight: ${({ as }) => (as === 'th' ? '600' : 'normal')};
  color: ${({ as }) => (as === 'th' ? '#333' : '#000')};
  text-align: ${({ align }) => align || 'left'};
`;

export default TableCell;
