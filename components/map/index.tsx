import dynamic from 'next/dynamic';

const Map = dynamic(
  () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return isMobile ? import('./map-mobile') : import('./map-desktop');
  },
  { ssr: false }
);

export default Map;
