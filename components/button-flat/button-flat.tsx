import { FC } from 'react';

export const ButtonFlat: FC<{ label: string; className?: string }> = ({ label, className }) => {
  return (
    <button className={['button-flat', className || ''].join(' ')}>
      <div className="button-flat--background" />
      <div className="absolute top-1.5 left-3 flex items-center justify-center font-kharkiv w-full h-full z-10">
        {label}
      </div>
    </button>
  );
};
