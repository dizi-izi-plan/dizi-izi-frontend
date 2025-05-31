import { getElementSize } from '@/components/Measurements';
import { WALLS, WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';
import { TWindowStyles } from '../types/types';

export const getWindowStyles = (
  wallThickness: number,
  wall: WALLS_NAMES_TYPE,
  size: number,
  verticalWall: number,
  horizontalWall: number,
): TWindowStyles => {
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
      direction: 'row',
    },
    [WALLS.second]: {
      height: `${wallThickness}px`,
      width: `${elementImageSize}%`,
      direction: 'column',
    },
    [WALLS.third]: {
      height: `${elementImageSize}%`,
      width: `${wallThickness}px`,
      direction: 'row',
    },
    [WALLS.forth]: {
      height: `${wallThickness}px`,
      width: `${elementImageSize}%`,
      direction: 'column',
    },
  };
};
