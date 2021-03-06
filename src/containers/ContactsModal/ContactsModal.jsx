import React from 'react';
import Modal from 'react-modal';
import ContactsForm from '../ContactsForm';
import { ModalContext } from './ModalProvider';
import CloseModalBtn from './CloseModalBtn';

import './ContactsModal.sass';

const modalStyles = {
  overlay: {
    zIndex: 9999,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  // content: {
  //   top: '50%',
  //   left: '50%',
  //   right: 'auto',
  //   bottom: 'auto',
  //   // marginRight: '-50%',
  //   transform: 'translate(-50%, -50%)',
  //   padding: 0,
  // },
};

const ContactsModal = () => {
  const { isOpen, closeModal } = React.useContext(ModalContext);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Напишите нам"
      style={modalStyles}
      className="modal-form-open"
    >
      <div className="modal-wrap">
       <ContactsForm onCloseModal={closeModal} className="modal" modal />
      </div>
    </Modal>
  );
};

export default ContactsModal;
