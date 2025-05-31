import { SIDE } from '@/components/Forms/SizesForm/utils/consts/consts';

export const windowDefaults = {
  wallNumber: '',
  size: '',
  distanceToWall: '',
  toWall: '',
};

export const windowWithBalcony = {
  wallNumber: '',
  size: '',
  doorSize: '',
  distanceToWall: '',
  toWall: '',
  side: SIDE.left,
};

export const initialWindows = {
  type: 'noWindow',
  windows: [],
};
