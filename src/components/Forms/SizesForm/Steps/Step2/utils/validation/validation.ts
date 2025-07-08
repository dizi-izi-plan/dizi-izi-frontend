import { z, string } from 'zod';
import { ERROR_MESSAGES } from '@/components/Forms/SizesForm/utils/consts/consts';
import { MAX_DOOR_SIZE, MIN_DOOR_SIZE } from '../consts/consts';

export const doorSizeValidation = z
  .string()
  .min(1, { message: ERROR_MESSAGES.required })
  .refine(
    (value) => Number(value) >= MIN_DOOR_SIZE && Number(value) <= MAX_DOOR_SIZE,
    {
      message: ERROR_MESSAGES.doorSizes,
    },
  );

export const DoorValidation = z.object({
  wallNumber: string().min(1, { message: ERROR_MESSAGES.required }),
  size: doorSizeValidation,
  distanceToWall: string().min(1, { message: ERROR_MESSAGES.required }),
  toWall: string().min(1, { message: ERROR_MESSAGES.required }),
  side: string(),
  open: string(),
});
