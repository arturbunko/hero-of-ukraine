import { useEffect, useState } from 'react';

import { Modal } from './modal';
import { Portal } from '../portal';
import { ErrorMessage } from './error-message';
import { SuccessMessage } from './success-message';

const DonateModal = ({ onClose, show }: { show: boolean; onClose: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!show) {
      setIsSuccess(false);
      setIsError(false);
    }
  }, [show]);

  if (!show) return null;

  const handleSuccess = () => {
    setIsSuccess(true);
    setIsError(false);
  };

  const handleError = () => {
    setIsSuccess(false);
    setIsError(true);
  };

  const isModalVisible = !isSuccess && !isError;
  const isSuccessVisible = isSuccess && !isError;
  const isErrorVisible = !isSuccess && isError;

  console.log({ isModalVisible, isSuccessVisible, isErrorVisible });

  return (
    <Portal>
      <div
        className="fixed top-0 left-0 w-screen h-full z-50 flex flex-col items-center justify-center no-scrollbar"
        style={{
          background: 'rgba(31, 31, 39, 0.4)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {isModalVisible && (
          <Modal handleError={handleError} hanldeSuccess={handleSuccess} onClose={onClose} />
        )}
        {isSuccessVisible && <SuccessMessage onClose={onClose} />}
        {isErrorVisible && <ErrorMessage onClose={onClose} />}
      </div>
    </Portal>
  );
};

export default DonateModal;
