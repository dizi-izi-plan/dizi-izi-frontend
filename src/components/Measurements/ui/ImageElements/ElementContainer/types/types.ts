import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';
import { TWindow } from '../../Window';

export type TElementContainer = TWindow;

type TPositionStyles = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  flexDirection: 'column' | 'row' | 'column-reverse' | 'row-reverse';
};

export type TElementContainerStyles = {
  [T in WALLS_NAMES_TYPE]: {
    container: {
      width: string;
      height: string;
      alignItems: string;
      position: {
        distFromLeft: TPositionStyles;
        distFromRight: TPositionStyles;
      };
    };
    arrow: {
      width: string;
      height: string;
      padding: string;
    };
    line: {
      width: string;
      height: string;
    };
  };
};
