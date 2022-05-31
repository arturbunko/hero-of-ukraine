import { FC } from 'react';
import Lottie from 'react-lottie';
import * as animation from '../../public/45792-rotate-phone.json';

import useMediaQuery from '../../hooks/useMediaQuery';
import useScreenOrientation from '../../hooks/useScreenOrientation';

export const OrientationObserver: FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const orientation = useScreenOrientation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (isMobile && !orientation.includes('landscape')) {
    return (
      <div className="relative">
        <div className="absolute flex flex-col items-center w-full h-full overflow-hidden p-6 z-10">
          <p className="text-[32px] w-10/12 self-start uppercase">
            Rotate your phone for better experience
          </p>
          <Lottie options={defaultOptions} height={400} width={320} />
        </div>
        <div className="blur-sm max-h-screen overflow-hidden">{children}</div>
      </div>
    );
  }

  return <>{children}</>;
};
