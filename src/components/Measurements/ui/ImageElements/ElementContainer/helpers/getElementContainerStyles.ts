import { getElementSize } from '@/components/Measurements';
import {
  WALLS,
  WALLS_NAMES_TYPE,
} from '@/components/Forms/SizesForm/Steps/Step1/utils/consts/consts';
import { TElementContainerStyles } from '../types/types';

export const getElementContainerStyles = (
  wallThickness: number,
  wall: WALLS_NAMES_TYPE,
  size: number,
  verticalWall: number,
  horizontalWall: number,
): TElementContainerStyles => {
  let arrowSize;
  if (size >= 200) {
    arrowSize = getElementSize(wall, size, verticalWall, horizontalWall);
  } else if (size > 0) {
    arrowSize = 5;
  }

  return {
    [WALLS.first]: {
      container: {
        width: 'auto',
        height: '100%',
        alignItems: 'flex-start',
        position: {
          distFromRight: {
            left: `-${wallThickness}px`,
            top: '0px',
            flexDirection: 'column',
          },
          distFromLeft: {
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
          distFromRight: {
            top: `-${wallThickness}px`,
            right: '0px',
            flexDirection: 'row-reverse',
          },
          distFromLeft: {
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
          distFromRight: {
            right: `-${wallThickness}px`,
            bottom: '0px',
            flexDirection: 'column-reverse',
          },
          distFromLeft: {
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
          distFromRight: {
            bottom: `-${wallThickness}px`,
            left: '0px',
            flexDirection: 'row',
          },
          distFromLeft: {
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
