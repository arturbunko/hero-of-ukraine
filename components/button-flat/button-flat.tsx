import { FC } from 'react';
import { useTranslations } from 'use-intl';

export const ButtonFlat: FC<{ label: string; className?: string }> = ({ label, className }) => {
  const t = useTranslations('Support Button');

  return (
    <button className={['button-flat', className || ''].join(' ')}>
      <div className="button-flat--background" />
      <div className="absolute top-1.5 left-3 flex items-center justify-center font-kharkiv w-full h-full z-10">
        {t('label')}
      </div>
    </button>
  );
};
