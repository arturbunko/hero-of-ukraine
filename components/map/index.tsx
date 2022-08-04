import dynamic from 'next/dynamic';

const Map = dynamic(
  () => {
    //if device width is tablet or less, load map with small size
    if (window.innerWidth <= 1284) {
      return import('./map-mobile');
    }

    return import('./map-desktop');
  },
  { ssr: false }
);

export default Map;
