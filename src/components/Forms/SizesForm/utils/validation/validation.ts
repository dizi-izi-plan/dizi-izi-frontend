import { z } from 'zod';

import { checkDistanceToWall } from '../helpers/helpers';
import { WallsValidation } from '../../Steps/Step1/utils/validation/validation';
import { DoorValidation } from '../../Steps/Step2/utils/validation/validation';
import { WindowsValidation } from '../../Steps/Step3/utils/validation/validation';
import { FurnitureValidation } from '../../Steps/Step4/utils/validation/validation';

export const SizesFormValidation = z
  .object({
    walls: WallsValidation,
    door: DoorValidation,
    windows: WindowsValidation,
    furniture: FurnitureValidation,
  })
  .superRefine((values, context) => {
    if (values.door.distanceToWall)
      checkDistanceToWall(values, values.door, 'door', context);
  });
