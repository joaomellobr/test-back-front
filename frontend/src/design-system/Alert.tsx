import React from 'react';

interface Props {
  message: string;
}

const Alert: React.FC<Props> = ({ message }) => (
  <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>{message}</div>
);

export default Alert;