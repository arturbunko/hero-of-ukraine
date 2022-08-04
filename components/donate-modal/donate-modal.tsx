import { useEffect, useState, useLayoutEffect } from 'react';

import { Modal } from './modal';
import { Portal } from '../portal';
import { ErrorMessage } from './error-message';
import { SuccessMessage } from './success-message';

const useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const DonateModal = ({ onClose, show }: { show: boolean; onClose: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!show) {
      setIsSuccess(false);
      setIsError(false);
    }
  }, [show]);

  useIsomorphicEffect(() => {
    if (typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Chrome/') > -1) {
      if (window.navigator.userAgent.indexOf('Chrome/') > -1) {
        const versions = window.navigator.userAgent.match(/Chrome\/(\d+)\./);
        const chromeVersion = versions ? versions[1] : 100;

        if (chromeVersion < 90) {
          const nextElement = document.getElementById('__next');

          console.log('NextElement', nextElement);

          if (nextElement) {
            nextElement.style.setProperty('filter', show ? 'blur(24px)' : 'blur(0)');
          }
        }
      }
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
