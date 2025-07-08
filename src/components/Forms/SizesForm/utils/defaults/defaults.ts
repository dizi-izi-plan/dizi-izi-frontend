import { initialWalls } from '../../Steps/Step1/utils/defaults/defaults';
import { initialDoor } from '../../Steps/Step2/utils/defaults/defaults';
import { initialWindows } from '../../Steps/Step3/utils/defaults/defaults';
import { initialFurniture } from '../../Steps/Step4/utils/defaults/defaults';
import { SizesFormType } from '../types/types';

export const initialStepsState: SizesFormType = {
  walls: initialWalls,
  door: initialDoor,
  windows: initialWindows,
  furniture: initialFurniture,
};

export const stepKeys = Object.keys(initialStepsState);
