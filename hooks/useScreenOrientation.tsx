import { useState, useEffect } from 'react';

const getOrientation = () => window.screen?.orientation?.type;

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<OrientationType>(() => {
    if (typeof window === 'undefined') return 'portrait-primary';

    return getOrientation();
  });

  const updateOrientation = (event: Event) => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
