import Image from 'next/image';
import { FC } from 'react';
import { ImageProps } from 'next/dist/client/image';

export const ImagePath: FC<ImageProps & { external?: boolean }> = ({
  external = false,
  ...imageProps
}) => {
  const src =
    process.env.NODE_ENV === 'development' || external
      ? imageProps.src
      : '/hero-of-ukraine' + imageProps.src;

  return <Image {...imageProps} src={src} alt="" />;
};
