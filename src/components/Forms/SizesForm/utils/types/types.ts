import { z } from 'zod';
import { SizesFormValidation } from '../validation/validation';

export type SizesFormType = z.infer<typeof SizesFormValidation>;

export type ElementType = {
  distanceToWall: string;
  wallNumber: string;
  size: string;
  doorSize?: string;
  toWall?: string;
};

export type ErrorType = {
  code: string;
  message: string;
  path: string[];
};
