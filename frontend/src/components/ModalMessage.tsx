import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  message: string;
  onConfirm: () => void;
}

export const ModalMessage: React.FC<Props> = ({ message, onConfirm }) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Delete</button>
      {open &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="modal-content">
              <p>{message}</p>
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};