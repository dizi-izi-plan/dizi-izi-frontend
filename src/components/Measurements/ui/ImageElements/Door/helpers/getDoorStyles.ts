import { getElementSize } from '@/components/Measurements';
import { TDoorStyles } from '../types/types';
import {
  WALLS,
  WALLS_NAMES_TYPE,
} from '@/components/Forms/SizesForm/Steps/Step1/utils/consts/consts';

export const getDoorStyles = (
  wallThickness: number,
  wall: WALLS_NAMES_TYPE,
  size: number,
  verticalWall: number,
  horizontalWall: number,
): TDoorStyles => {
  const elementImageSize = getElementSize(
    wall,
    size,
    verticalWall,
    horizontalWall,
  );

  return {
    [WALLS.first]: {
      height: `${elementImageSize}%`,
      width: `${wallThickness}px`,
      rotate: 'rotate(90deg)',
    },
    [WALLS.second]: {
      height: `${wallThickness}px`,
      width: `${elementImageSize}%`,
      rotate: 'rotate(180deg)',
    },
    [WALLS.third]: {
      height: `${elementImageSize}%`,
      width: `${wallThickness}px`,
      rotate: 'rotate(-90deg)',
    },
    [WALLS.forth]: {
      height: `${wallThickness}px`,
      width: `${elementImageSize}%`,
      rotate: 'rotate(0deg)',
    },
  };
};
