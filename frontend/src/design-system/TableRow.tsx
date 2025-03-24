import styled from 'styled-components';

const TableRow = styled.tr<{ isHeader?: boolean }>`
  ${({ isHeader }) =>
    !isHeader &&
    `
    &:hover {
      background-color: #eef3fb;
    }
  `}
`;

export default TableRow;
