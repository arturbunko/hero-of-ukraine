import { Places } from '../constants/places';

export const getPlacePosition = (initial: string, current: string): number => {
  const placesCount = Places.length;
  const initialIndex = Places.findIndex((value) => value.path === initial);
  const currentIndex = Places.findIndex((value) => value.path === current);

  console.log({ placesCount, initialIndex, currentIndex });

  const isCurrent = initialIndex === currentIndex;

  if (isCurrent) return 1;

  if (currentIndex > initialIndex) {
    return placesCount - (placesCount - currentIndex + 2);
  }

  return Places.length - Math.abs(initialIndex - currentIndex) + 1;
};
