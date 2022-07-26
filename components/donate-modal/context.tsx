import { createContext, ReactNode, FC, useState, useCallback, useMemo, useContext } from 'react';
import { DonateModal } from './index';

const DonateModalContext = createContext({
  onClose: () => {},
  setShow: () => {},
});

export const DonateModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(() => {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem('paypal-modal-opened') == 'true';
  });

  const onClose = useCallback(() => {
    localStorage.setItem('paypal-modal-opened', 'false');
    setShow(false);
  }, []);

  const setShowModal = useCallback(() => {
    setShow(true);
    localStorage.setItem('paypal-modal-opened', 'true');
  }, []);

  const value = useMemo(
    () => ({
      onClose,
      setShow: setShowModal,
    }),
    [onClose, setShowModal]
  );

  return (
    <DonateModalContext.Provider value={value}>
      {children}
      <DonateModal show={show} onClose={onClose} />
    </DonateModalContext.Provider>
  );
};

export const useDonateModal = () => {
  const context = useContext(DonateModalContext);

  if (!context) {
    throw 'Please wrap component in DonateModalProvider';
  }

  return context;
};
