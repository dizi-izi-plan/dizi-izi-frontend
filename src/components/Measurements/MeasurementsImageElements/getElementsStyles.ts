import { WALLS } from '@/components/Forms/SizesForm/formData';
import { TWalls } from '../MeasurementsTypes';
import {
  TLineStyles,
  TWindowStyles,
  TDoorStyles,
  TBalconyStyles,
  TElementContainerStyles,
} from '../MeasurementsTypes';
import { getElementSize } from '../helpers';

export const getDoorStyles = (
  wallThickness: number,
  wall: TWalls,
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

export const lineStyles: TLineStyles = {
  [WALLS.first]: {
    height: '100%',
    width: '1px',
  },
  [WALLS.second]: {
    height: '1px',
    width: '100%',
  },
  [WALLS.third]: {
    height: '100%',
    width: '1px',
  },
  [WALLS.forth]: {
    height: '1px',
    width: '100%',
  },
};

export const getWindowStyles = (
  wallThickness: number,
  wall: TWalls,
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

export const getBalconyStyles = (
  wallThickness: number,
  wall: TWalls,
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
          openLeft: { top: '0px', right: '-15px', transform: 'rotate(-15deg)' },
          openRight: {
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
          openLeft: {
            bottom: '-15px',
            right: '0px',
            transform: 'rotate(-15deg)',
          },
          openRight: {
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
          openLeft: {
            bottom: '0px',
            left: '-15px',
            transform: 'rotate(-15deg)',
          },
          openRight: { top: '0px', left: '-15px', transform: 'rotate(15deg)' },
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
          openLeft: { top: '-15px', left: '0px', transform: 'rotate(-15deg)' },
          openRight: { top: '-15px', right: '0px', transform: 'rotate(15deg)' },
        },
      },
    },
  };
};

export const getElementContainerStyles = (
  wallThickness: number,
  wall: TWalls,
  size: number,
  verticalWall: number,
  horizontalWall: number,
): TElementContainerStyles => {
  const arrowSize = getElementSize(wall, size, verticalWall, horizontalWall);

  return {
    [WALLS.first]: {
      container: {
        width: 'auto',
        height: '100%',
        alignItems: 'flex-start',
        position: {
          distFromLeft: {
            left: `-${wallThickness}px`,
            top: '0px',
            flexDirection: 'column',
          },
          distFromRight: {
            left: `-${wallThickness}px`,
            bottom: '0px',
            flexDirection: 'column-reverse',
          },
        },
      },
      arrow: {
        width: `${wallThickness}px`,
        height: `${arrowSize}%`,
        padding: '5px 0',
      },
      line: {
        width: '2px',
        height: '100%',
      },
    },
    [WALLS.second]: {
      container: {
        width: '100%',
        height: 'auto',
        alignItems: 'flex-start',
        position: {
          distFromLeft: {
            top: `-${wallThickness}px`,
            right: '0px',
            flexDirection: 'row-reverse',
          },
          distFromRight: {
            top: `-${wallThickness}px`,
            left: '0px',
            flexDirection: 'row',
          },
        },
      },
      arrow: {
        width: `${arrowSize}%`,
        height: `${wallThickness}px`,
        padding: '0 5px',
      },
      line: {
        width: '100%',
        height: '2px',
      },
    },
    [WALLS.third]: {
      container: {
        width: 'auto',
        height: '100%',
        alignItems: 'flex-end',
        position: {
          distFromLeft: {
            right: `-${wallThickness}px`,
            bottom: '0px',
            flexDirection: 'column-reverse',
          },
          distFromRight: {
            right: `-${wallThickness}px`,
            top: '0px',
            flexDirection: 'column',
          },
        },
      },
      arrow: {
        width: `${wallThickness}px`,
        height: `${arrowSize}%`,
        padding: '5px 0',
      },
      line: {
        width: '2px',
        height: '100%',
      },
    },
    [WALLS.forth]: {
      container: {
        width: '100%',
        height: 'auto',
        alignItems: 'flex-end',
        position: {
          distFromLeft: {
            bottom: `-${wallThickness}px`,
            left: '0px',
            flexDirection: 'row',
          },
          distFromRight: {
            bottom: `-${wallThickness}px`,
            right: '0px',
            flexDirection: 'row-reverse',
          },
        },
      },
      arrow: {
        width: `${arrowSize}%`,
        height: `${wallThickness}px`,
        padding: '0 5px',
      },
      line: {
        width: '100%',
        height: '2px',
      },
    },
  };
};