import React from 'react';
import Modal from 'react-modal';
import './modal-frame.scss';

export const ModalFrame = ({ WrappedComponent, width, showFrm, closeFrm, result }) => {
  const customStyles = {
    content: {
      padding: '0px',
      top: '25%',
      left: '50%',
      right: `calc(100vw - ${width}%)`,
      bottom: 'auto',
      borderRadius: '6px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  return (
    <Modal isOpen={showFrm} onRequestClose={closeFrm} style={customStyles}>
      <WrappedComponent result={result} />
    </Modal>
  );
};
