import { z, string, array } from 'zod';
import { ERROR_MESSAGES } from '@/components/Forms/SizesForm/utils/consts/consts';
import { doorSizeValidation } from '../../../Step2';

export const WindowValidation = z.object({
  wallNumber: string().min(1, { message: ERROR_MESSAGES.required }),
  size: string().min(1, { message: ERROR_MESSAGES.required }),
  distanceToWall: string().min(1, { message: ERROR_MESSAGES.required }),
  toWall: string().min(1, { message: ERROR_MESSAGES.required }),
  doorSize: doorSizeValidation.optional(),
  side: string().optional(),
});

export const WindowsValidation = z.object({
  type: string().min(1, { message: ERROR_MESSAGES.required }),
  windows: array(WindowValidation).optional(),
});
