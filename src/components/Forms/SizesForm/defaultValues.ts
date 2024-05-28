import { OPEN, SIDE } from './formData';
import { SizesFormType } from './validation';

export const walls = {
  first: '',
  second: '',
  third: '',
  forth: '',
};

export const door = {
  wallNumber: 'walls.first',
  size: '',
  distanceToWall: '',
  toWall: '2',
  side: SIDE.left,
  open: OPEN.inside,
};

export const furniture = {
  bed: 0,
  bedsNumber: 1,
  wardrobe: 0,
  other: [],
};

export const initialStepsState: SizesFormType = {
  walls,
  door,
  // windows: {},
  furniture,
};
