import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useTranslations } from 'use-intl';

const Progress = () => {
  const [number, setNumber] = useState(0);
  const counterRef = useRef<any>();
  const t = useTranslations('Progress');

  useEffect(() => {
    for (let count = 0; count <= 15653; count++) {
      counterRef.current = setTimeout(() => {
        setNumber(count);
      }, 500);
    }

    return () => {
      clearTimeout(counterRef.current);
    };
  }, []);

  return (
    <div className="flex items-center h-5 pt-4 mb-5">
      <progress value={number} max={50000} />
      <div className="inline-flex text-[#FFFFFF33] lg:text-body text-bodyMob lg:ml-24 ml-5 shrink-0">
        <div className="text-white min-w-[44px]">
          <CountUp className="font-bold" end={15653} />
        </div>
        <span className="text-white">&nbsp;/&nbsp;</span>
        <span> 50 000 {t('donations').toUpperCase()}</span>
      </div>
    </div>
  );
};

export default React.memo(Progress);
