import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm/types';

export type TWindow = {
  wall: WALLS_NAMES_TYPE;
  size: number;
  distance: number;
  distanceFromLeft: boolean;
  distanceFromRight: boolean;
  isFocused: boolean;
  openLeft?: boolean;
};

export type TDoor = TWindow & {
  openLeft: boolean;
  openInside: boolean;
};

export type TElementContainer = TWindow;

export type TLineStyles = {
  [T in WALLS_NAMES_TYPE]: {
    height: string;
    width: string;
  };
};

export type TWindowStyles = {
  [T in WALLS_NAMES_TYPE]: {
    height: string;
    width: string;
    direction: 'column' | 'row';
  };
};

export type TDoorStyles = {
  [T in WALLS_NAMES_TYPE]: {
    height: string;
    width: string;
    rotate: string;
  };
};

type TBalconyDoorPosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform: string;
} | null;

export type TBalconyStyles = {
  [T in WALLS_NAMES_TYPE]: {
    window: {
      height: string;
      width: string;
      direction: 'column' | 'row';
    };
    door: {
      height: string;
      width: string;
      direction: 'column' | 'row';
      position: {
        openLeft: TBalconyDoorPosition;
        openRight: TBalconyDoorPosition;
      };
    };
  };
};

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
