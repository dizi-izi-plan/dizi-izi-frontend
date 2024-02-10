import { WALLS } from '@/components/Forms/SizesForm/formData';

export type TWalls = WALLS.first | WALLS.second | WALLS.third | WALLS.forth;

export type TWindow = {
  wall: TWalls;
  size: number;
  distance: number;
  distanceFromLeft: boolean;
  distanceFromRight: boolean;
  isFocused: boolean;
};

export type TBalcony = TWindow & {
  openLeft: boolean;
};

export type TDoor = TBalcony & {
  openInside: boolean;
};

export type TElementContainer = TWindow;

export type TLineStyles = {
  [T in TWalls]: {
    height: string;
    width: string;
  };
};

export type TWindowStyles = {
  [T in TWalls]: {
    height: string;
    width: string;
    direction: 'column' | 'row';
  };
};

export type TDoorStyles = {
  [T in TWalls]: {
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
  [T in TWalls]: {
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
  [T in TWalls]: {
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
