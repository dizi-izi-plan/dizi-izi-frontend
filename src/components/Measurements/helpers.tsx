import { WALLS } from '@/components/Forms/SizesForm/formData';
import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm/types';

export const getElementSize = (
  wall: WALLS_NAMES_TYPE,
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
