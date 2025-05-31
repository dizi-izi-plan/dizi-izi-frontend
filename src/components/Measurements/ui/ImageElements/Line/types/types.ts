import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm';

export type TLineStyles = {
  [T in WALLS_NAMES_TYPE]: {
    height: string;
    width: string;
  };
};
