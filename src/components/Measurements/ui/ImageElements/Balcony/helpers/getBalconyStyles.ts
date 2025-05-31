import { getElementSize } from '@/components/Measurements';
import { WALLS, WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';
import { TBalconyStyles } from '../types/types';

export const getBalconyStyles = (
  wallThickness: number,
  wall: WALLS_NAMES_TYPE,
  size: number,
  verticalWall: number,
  horizontalWall: number,
): TBalconyStyles => {
  const elementImageSize = getElementSize(
    wall,
    size,
    verticalWall,
    horizontalWall,
  );

  return {
    [WALLS.first]: {
      window: {
        width: `${wallThickness}px`,
        height: `${elementImageSize}%`,
        direction: 'row',
      },
      door: {
        width: '9px',
        height: '33%',
        direction: 'row',
        position: {
          openRight: {
            top: '0px',
            right: '-15px',
            transform: 'rotate(-15deg)',
          },
          openLeft: {
            bottom: '0px',
            right: '-15px',
            transform: 'rotate(15deg)',
          },
        },
      },
    },
    [WALLS.second]: {
      window: {
        width: `${elementImageSize}%`,
        height: `${wallThickness}px`,
        direction: 'column',
      },
      door: {
        width: '33%',
        height: '9px',
        direction: 'column',
        position: {
          openRight: {
            bottom: '-15px',
            right: '0px',
            transform: 'rotate(-15deg)',
          },
          openLeft: {
            bottom: '-15px',
            left: '0px',
            transform: 'rotate(15deg)',
          },
        },
      },
    },
    [WALLS.third]: {
      window: {
        width: `${wallThickness}px`,
        height: `${elementImageSize}%`,
        direction: 'row',
      },
      door: {
        width: '9px',
        height: '33%',
        direction: 'row',
        position: {
          openRight: {
            bottom: '0px',
            left: '-15px',
            transform: 'rotate(-15deg)',
          },
          openLeft: {
            top: '0px',
            left: '-15px',
            transform: 'rotate(15deg)',
          },
        },
      },
    },
    [WALLS.forth]: {
      window: {
        width: `${elementImageSize}%`,
        height: `${wallThickness}px`,
        direction: 'column',
      },
      door: {
        width: '33%',
        height: '9px',
        direction: 'column',
        position: {
          openRight: { top: '-15px', left: '0px', transform: 'rotate(-15deg)' },
          openLeft: {
            top: '-15px',
            right: '0px',
            transform: 'rotate(15deg)',
          },
        },
      },
    },
  };
};
