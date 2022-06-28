import { FC, useEffect, useRef } from 'react';
import { Places } from '../../constants/places';
import { ImagePath } from '../image-path/image-path';

export const Background: FC<{ images: typeof Places['0']['props']['images'] }> = ({ images }) => {
  const warImageRef = useRef<HTMLDivElement>(null);
  const peaceImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    warImageRef.current?.style.setProperty('opacity', '0');

    const warImage = new Image();
    warImage.onload = () => {
      setTimeout(() => {
        warImageRef.current?.style.setProperty(
          'background-image',
          `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url('${warImage.src}')`
        );
        warImageRef.current?.style.setProperty('opacity', '1');
      }, 500);
    };

    warImage.src = images.war;

    peaceImageRef.current?.style.setProperty('opacity', '0');

    const peaceImage = new Image();
    peaceImage.onload = () => {
      setTimeout(() => {
        peaceImageRef.current?.style.setProperty(
          'background-image',
          `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url('${peaceImage.src}')`
        );
        peaceImageRef.current?.style.setProperty('opacity', '1');
      }, 500);
    };

    peaceImage.src = images.peace;
  }, [images.peace, images.war]);

  return (
    <div className="absolute w-full h-full z-0">
      <div
        ref={warImageRef}
        className="h-1/2 w-full"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0,
          transition: 'opacity .5s',
        }}
      />
      <div
        ref={peaceImageRef}
        className="h-1/2 w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0,
          transition: 'opacity .5s',
        }}
      />
    </div>
  );
};
