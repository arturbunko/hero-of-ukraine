import { ChangeEvent, FC, useState } from 'react';
import router from 'next/router';
import clsx from 'clsx';

import { emailRegEx } from '../../constants/email-regexp';
import useScreenOrientation from '../../hooks/useScreenOrientation';
import { PayPalButtons } from '../paypal-buttons';
import { useTranslations } from 'next-intl';

enum Donate {
  EMPTY = '',
  SMALL = 'donation.4.99',
  MEDIUM = 'donation.19.99',
  BIG = 'donation.49.99',
  RICH = 'donation.99.99',
}

interface ModalProps {
  onClose: () => void;
  hanldeSuccess: () => void;
  handleError: () => void;
}

export const Modal: FC<ModalProps> = ({ onClose, handleError, hanldeSuccess }) => {
  const orientation = useScreenOrientation();
  const [donate, setDonate] = useState<Donate>(Donate.EMPTY);
  const [userEmail, setUserEmail] = useState({
    email: '',
    isValid: false,
  });
  const t = useTranslations('Modal');

  const canPay = donate !== Donate.EMPTY && userEmail.isValid;

  const handleClickDonate = (value: Donate) => () => {
    setDonate(value);
  };

  const handleEmailChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    setUserEmail({
      email,
      isValid: emailRegEx.test(email),
    });
  };

  const isLandscape = orientation.includes('landscape');
  return (
    <div
      id="modal"
      className={clsx(
        'flex flex-col z-50 max-w-[480px] no-scrollbar',
        isLandscape && 'md:min-w-[480px] min-w-[480px] mt-4',
        !isLandscape && 'md:min-w-[480px] min-w-full px-4'
      )}
    >
      <button className="self-start lg:mb-8 mb-3" onClick={onClose}>
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
      <div
        id="modal-content"
        className="lg:p-10 p-4 no-scrollbar"
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(255, 255, 255, 0.24)',
        }}
      >
        <h3 className="lg:text-24 text-16 font-mariupol">{t('Support option')}</h3>
        <div
          className={clsx(
            'grid lg:grid-cols-1 grid-cols-[fit-content(100px)_fit-content(100px)] lg:gap-y-4 gap-x-4 mt-4',
            isLandscape &&
              'grid-cols-[fit-content(100px)_fit-content(100px)_fit-content(100px)_fit-content(100px)]'
          )}
        >
          <CheckBox
            label="$ 4.99"
            isActive={donate === Donate.SMALL}
            onChange={handleClickDonate(Donate.SMALL)}
          />
          <CheckBox
            label="$ 19.99"
            isActive={donate === Donate.MEDIUM}
            onChange={handleClickDonate(Donate.MEDIUM)}
          />
          <CheckBox
            label="$ 49.99"
            isActive={donate === Donate.BIG}
            onChange={handleClickDonate(Donate.BIG)}
          />
          <CheckBox
            label="$ 99.99"
            isActive={donate === Donate.RICH}
            onChange={handleClickDonate(Donate.RICH)}
          />
        </div>
        <label className="lg:text-24 text-16 font-mariupol mb-4 lg:mt-8 mt-4" htmlFor="email">
          {t('Email')}
        </label>
        <input
          value={userEmail.email}
          onChange={handleEmailChanged}
          className="p-4 bg-white text-16 leading-snug text-noise font-mariupol outline-none placeholder:text-noise placeholder:opacity-50"
          placeholder="email@example.com"
          name="emai"
          type="text"
        />

        <PayPalButtons
          isActive={canPay}
          purchaseName={donate}
          email={userEmail.email}
          handleError={handleError}
          handleSuccess={hanldeSuccess}
          locale={(router.locale as 'en' | 'uk') || 'en'}
        />
      </div>
    </div>
  );
};

const CheckBox = ({
  label,
  isActive,
  onChange,
}: {
  label: string;
  isActive: boolean;
  onChange: () => void;
}) => {
  return (
    <label className="flex items-center w-fit mb-3 cursor-pointer text-[16px] select-none group">
      <input
        checked={isActive}
        onChange={onChange}
        type="checkbox"
        className="peer absolute opacity-0 cursor-pointer h-0 w-0"
      />
      <span
        className={clsx(
          'relative h-[16px] w-[16px] min-h-[16px] min-w-[16px] border-2 border-solid border-white box-border rounded-full',
          'group-hover:after:absolute group-hover:after:border group-hover:after:border-white group-hover:after:box-border group-hover:after:rounded-full group-hover:after:top-1/2 group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:-translate-y-1/2 group-hover:after:w-[10px] group-hover:after:h-[10px] group-hover:after:bg-white',
          'peer-checked:after:absolute peer-checked:after:border peer-checked:after:border-white peer-checked:after:box-border peer-checked:after:rounded-full peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-[10px] peer-checked:after:h-[10px] peer-checked:after:bg-white'
        )}
      />
      <p className=" text-white ml-2">{label}</p>
    </label>
  );
};
