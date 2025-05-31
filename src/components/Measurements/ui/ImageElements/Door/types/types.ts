import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';
import { TWindow } from '../../Window/types/types';

export type TDoor = TWindow & {
  openLeft: boolean;
  openInside: boolean;
};

export type TDoorStyles = {
  [T in WALLS_NAMES_TYPE]: {
    height: string;
    width: string;
    rotate: string;
  };
};
