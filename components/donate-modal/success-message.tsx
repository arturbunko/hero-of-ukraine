import { useTranslations } from 'next-intl';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useEffect, useRef } from 'react';

export const SuccessMessage = ({ onClose }: { onClose: () => void }) => {
  const successRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Modal.Success');

  useEffect(() => {
    if (successRef.current) disableBodyScroll(successRef.current);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      id="modal"
      ref={successRef}
      className="relative w-full h-full flex flex-col items-center justify-center lg:text-h2 text-h2Mob leading-normal font-kharkiv"
    >
      <button className="absolute top-10 left-10" onClick={onClose}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.25 1.25L30.75 30.75M1.25 30.75L30.75 1.25" stroke="white" strokeWidth="2" />
        </svg>
      </button>
      <p>{t('text1')}</p>
      <p className="mt-6 lg:text-left text-center">{t('text2')}</p>
    </div>
  );
};
