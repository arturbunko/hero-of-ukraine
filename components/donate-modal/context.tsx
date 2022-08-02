import { createContext, ReactNode, FC, useState, useCallback, useMemo, useContext } from 'react';
import DonateModal from './donate-modal';

const DonateModalContext = createContext({
  onClose: () => {},
  setShow: () => {},
});

declare global {
  interface Window {
    houPaypalModalOpened: boolean;
  }
}

export const DonateModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.houPaypalModalOpened;
  });

  const onClose = useCallback(() => {
    window.houPaypalModalOpened = false;
    setShow(false);
  }, []);

  const setShowModal = useCallback(() => {
    window.houPaypalModalOpened = true;

    setShow(true);
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
