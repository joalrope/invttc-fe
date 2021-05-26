import React from 'react';
import Modal from 'react-modal';
import './modal-frame.scss';

export const ModalFrame = ({ WrappedComponent, title, width, showFrm, closeFrm, result }) => {
  const customStyles = {
    content: {
      position: 'absolute',
      padding: '0px',
      top: '30%',
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
      <div className='--frame-header'>
        <label>{title}</label>
        <img alt='logo tractocenter' />
      </div>
      <div className='--frame-body'>
        <WrappedComponent result={result} />
      </div>
    </Modal>
  );
};
