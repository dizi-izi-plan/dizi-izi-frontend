import { z, string, number } from 'zod';
import { MIN_WALLS_INPUT_LENGTH, MIN_WALLS_VALUE } from '../consts/consts';

const wallValidation = z
  .union([number(), string()])
  .refine((value) => `${value}`.length >= MIN_WALLS_INPUT_LENGTH)
  .refine((value) => Number(value) >= MIN_WALLS_VALUE);

export const WallsValidation = z.object({
  first: wallValidation,
  second: wallValidation,
  third: wallValidation,
  forth: wallValidation,
});
