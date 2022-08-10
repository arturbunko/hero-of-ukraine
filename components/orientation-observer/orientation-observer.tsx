import { FC, useEffect } from 'react';

import RotationAnimation from '../rotation-animation';
import useMediaQuery from '../../hooks/useMediaQuery';
import useScreenOrientation from '../../hooks/useScreenOrientation';

export const OrientationObserver: FC<{ children: React.ReactNode }> = ({ children }) => {
  // const isMobile = useMediaQuery('(max-width: 640px)');
  // const orientation = useScreenOrientation();

  // useEffect(() => {
  //   if (isMobile) {
  //     //lock orientation to landscape
  //     screen.orientation.lock('landscape');
  //   }
  // }, [isMobile, orientation]);

  // if (isMobile && !orientation.includes('landscape')) {
  //   return (
  //     <div className="relative">
  //       <div className="absolute flex flex-col items-center w-full h-full overflow-hidden p-6 z-10">
  //         <p className="text-[32px] w-10/12 self-start uppercase">
  //           Rotate your phone for better experience
  //         </p>
  //         <RotationAnimation />
  //       </div>
  //       <div className="blur-sm max-h-screen overflow-hidden">{children}</div>
  //     </div>
  //   );
  // }

  return <>{children}</>;
};
