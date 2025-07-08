import {
  WALLS,
  WALLS_NAMES_TYPE,
} from '@/components/Forms/SizesForm/Steps/Step1/utils/consts/consts';

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
