import { FC } from 'react';
import { useRouter } from 'next/router';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MapDesktop } from './map-desktop';
import { MapMobile } from './map-mobile';

const Map: FC<{ className?: string }> = ({ className }) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const router = useRouter();

  const handleMapClicked = (city: string) => () => {
    router.push(`/city/${city}`);
  };

  return (
    <>
      {isLargeScreen ? (
        <MapDesktop className={className} onClick={handleMapClicked} />
      ) : (
        <MapMobile className={className} onClick={handleMapClicked} />
      )}
    </>
  );
};

export default Map;
