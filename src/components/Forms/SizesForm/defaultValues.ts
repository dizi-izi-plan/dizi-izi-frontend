import { SizesFormType } from './validation';

export const walls = {
  first: '',
  second: '',
  third: '',
  forth: '',
};

export const furniture = {
  bed: 0,
  bedsNumber: 1,
  wardrobe: 0,
  other: [],
};

export const initialStepsState: SizesFormType = {
  walls,
  // doors: {},
  // windows: {},
  furniture,
};
