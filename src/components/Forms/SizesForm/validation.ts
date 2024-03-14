import { z, number, string } from 'zod';

export const MIN_WALLS_INPUT_LENGTH = 4;
export const MAX_WALLS_INPUT_LENGTH = 4;
export const MAX_DOOR_INPUT_LENGTH = 3;

export const MIN_WALLS_VALUE = 1000;
export const MIN_DOOR_SIZE = 700;
export const MAX_DOOR_SIZE = 900;
export const MIN_DOOR_DISTANCE_TO_WALL = 50;

export const ERROR_MESSAGES = {
  minWallsSizes: 'Длина стен не может быть меньше 1000мм',
  doorSizes: 'Размер двери не может быть меньше 700мм и больше 900мм',
  minDistanceToWall: 'Расстояние от двери до стены не может быть меньше 50мм',
  maxDistanceToWall: 'Расстояние от двери до стены слишком большое',
};

const wallValidation = z
  .union([number(), string()])
  .refine((value) => `${value}`.length >= MIN_WALLS_INPUT_LENGTH)
  .refine((value) => Number(value) >= MIN_WALLS_VALUE);

const doorSize = z
  .string()
  .refine(
    (value) => Number(value) >= MIN_DOOR_SIZE && Number(value) <= MAX_DOOR_SIZE,
    {
      message: ERROR_MESSAGES.doorSizes,
    },
  );

// ADD VALIDATION FROM COMMENT
const doorDistanceToWall = z
  .string()
  .refine((value) => Number(value) >= MIN_DOOR_DISTANCE_TO_WALL, {
    message: ERROR_MESSAGES.minDistanceToWall,
  });

export const WallsValidation = z.object({
  first: wallValidation,
  second: wallValidation,
  third: wallValidation,
  forth: wallValidation,
});

export const FurnitureValidation = z.object({
  bed: z.number(),
  bedsNumber: z.number(),
  wardrobe: z.number(),
  other: z.array(z.number()),
});

export const DoorValidation = z.object({
  wallNumber: string(),
  size: doorSize,
  distanceToWall: doorDistanceToWall, // not more than wall's size - door.size > 5cm
  toWall: z.string(),
  side: z.string(),
  open: z.string(),
});

export const SizesFormValidation = z.object({
  walls: WallsValidation,
  door: DoorValidation,
  // windows: z.object({}),
  furniture: FurnitureValidation,
});

export type SizesFormType = z.infer<typeof SizesFormValidation>;
