import { z, number, string } from 'zod';

export const MIN_WALLS_INPUT_LENGTH = 4;
export const MAX_WALLS_INPUT_LENGTH = 4;
export const MIN_WALLS_VALUE = 1000;

export const ERROR_MESSAGES = {
  minWallsSizes: 'Длина стен не может быть меньше 1000мм',
};

const wallValidation = z
  .union([number(), string()])
  .refine((value) => `${value}`.length >= MIN_WALLS_INPUT_LENGTH)
  .refine((value) => +value >= MIN_WALLS_VALUE);

export const WallsValidation = z.object({
  first: wallValidation,
  second: wallValidation,
  third: wallValidation,
  forth: wallValidation,
});

const furnitureItemValidation = z.number();

const otherFurnitureValidation = z.array(z.number());

export const FurnitureValidation = z.object({
  bed: furnitureItemValidation,
  bedsNumber: furnitureItemValidation,
  wardrobe: furnitureItemValidation,
  other: otherFurnitureValidation,
});

export const SizesFormValidation = z.object({
  walls: WallsValidation,
  // doors: z.object({}),
  // windows: z.object({}),
  furniture: FurnitureValidation,
});

export type SizesFormType = z.infer<typeof SizesFormValidation>;
