import { useState, useEffect } from 'react';

const getOrientation = (): OrientationType => {
  const mql = window.matchMedia('(orientation: portrait)');

  if (mql.matches) {
    return 'portrait-primary';
  }
  return 'landscape-primary';
};

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<OrientationType>(() => {
    if (typeof window === 'undefined') return 'portrait-primary';

    return getOrientation();
  });

  const updateOrientation = (event: Event) => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    const mql = window.matchMedia('(orientation: portrait)');

    mql.addEventListener('change', updateOrientation);
    return () => {
      mql.removeEventListener('change', updateOrientation);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
