import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';

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
