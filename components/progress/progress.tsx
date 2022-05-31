import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const Progress = () => {
  const [number, setNumber] = useState(0);
  const counterRef = useRef<any>();

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
      <div className="inline-flex text-[#FFFFFF33] lg:text-body text-bodyMob w-fit lg:min-w-[191px] min-w-[173px] lg:ml-24 ml-5">
        <div className="text-white min-w-[44px]">
          <CountUp className="font-bold" end={15653} />
        </div>
        <span className="text-white"> / </span>
        50 000 DONATIONS
      </div>
    </div>
  );
};

export default React.memo(Progress);
