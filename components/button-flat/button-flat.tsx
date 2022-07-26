import { FC } from 'react';
import { useTranslations } from 'use-intl';
import { useDonateModal } from '../donate-modal/context';

export const ButtonFlat: FC<{ label: string; className?: string }> = ({ label, className }) => {
  const { setShow } = useDonateModal();
  const t = useTranslations('Support Button');

  return (
    <button className={['button-flat', className || ''].join(' ')} onClick={setShow}>
      <div className="button-flat--background" />
      <div className="absolute top-1.5 left-3 flex items-center justify-center font-kharkiv w-full h-full z-10">
        {t('label')}
      </div>
    </button>
  );
};
