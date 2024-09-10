import { OPEN, SIDE, WALLS } from './formData';
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
  toWall: WALLS.second,
  side: SIDE.left,
  open: OPEN.inside,
};

export const window = {
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

const windows = {
  type: '',
  windows: [],
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
  windows,
  furniture,
};
