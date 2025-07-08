import { WALLS } from '@/components/Forms/SizesForm/Steps/Step1/utils/consts/consts';
import { TLineStyles } from '../types/types';

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
