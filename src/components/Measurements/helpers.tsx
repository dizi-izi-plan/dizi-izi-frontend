import { WALLS } from '@/components/Forms/SizesForm/formData';
import { TWalls } from './MeasurementsTypes';

export const getElementSize = (
  wall: TWalls,
  size: number,
  verticalWall: number,
  horizontalWall: number,
) => {
  if (wall === WALLS.first || wall === WALLS.third) {
    return Math.floor((size / verticalWall) * 100);
  } else {
    return Math.floor((size / horizontalWall) * 100);
  }
};
