import Image from 'next/future/image';
import { FC } from 'react';
import type { ImageProps } from 'next/dist/client/future/image';

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
