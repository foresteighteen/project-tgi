import React from 'react';

export const ModalContext = React.createContext({
  isOpen: null,
  openModal: () => null,
  closeModal: () => null,
});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
