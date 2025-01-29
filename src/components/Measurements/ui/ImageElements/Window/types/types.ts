import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';

export type TWindow = {
  wall: WALLS_NAMES_TYPE;
  size: number;
  distance: number;
  distanceFromLeft: boolean;
  distanceFromRight: boolean;
  isFocused: boolean;
  openLeft?: boolean;
};

export type TWindowStyles = {
  [T in WALLS_NAMES_TYPE]: {
    height: string;
    width: string;
    direction: 'column' | 'row';
  };
};
