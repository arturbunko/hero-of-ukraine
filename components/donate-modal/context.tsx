import { PayPalScriptProvider } from '@paypal/react-paypal-js';
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
    <PayPalScriptProvider
      options={{
        'client-id': process.env.NEXT_PUBLIC_P_ID as string,
      }}
    >
      <DonateModalContext.Provider value={value}>
        {children}
        <DonateModal show={show} onClose={onClose} />
      </DonateModalContext.Provider>
    </PayPalScriptProvider>
  );
};

export const useDonateModal = () => {
  const context = useContext(DonateModalContext);

  if (!context) {
    throw 'Please wrap component in DonateModalProvider';
  }

  return context;
};
