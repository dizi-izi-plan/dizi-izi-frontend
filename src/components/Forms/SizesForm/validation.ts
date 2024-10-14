import { z, number, string, array } from 'zod';
import { ERROR_MESSAGES } from './Steps/utils/consts';
import { checkDistanceToWall } from './Steps/utils/helpers';

export const MIN_WALLS_INPUT_LENGTH = 4;
export const MAX_WALLS_INPUT_LENGTH = 4;
export const MAX_DOOR_INPUT_LENGTH = 3;
export const MAX_WINDOW_INPUT_LENGTH = 4;

export const MIN_WALLS_VALUE = 1000;
export const MIN_DOOR_SIZE = 700;
export const MAX_DOOR_SIZE = 900;
export const MIN_WINDOW_SIZE = 400;
export const MIN_WINDOW_WITH_BALCONY_SIZE = 700;

// WALLS
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

// DOOR
const doorSize = z
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
  size: doorSize,
  distanceToWall: string().min(1, { message: ERROR_MESSAGES.required }),
  toWall: string().min(1, { message: ERROR_MESSAGES.required }),
  side: string(),
  open: string(),
});

// WINDOW
export const WindowValidation = z.object({
  wallNumber: string().min(1, { message: ERROR_MESSAGES.required }),
  size: string().min(1, { message: ERROR_MESSAGES.required }),
  distanceToWall: string().min(1, { message: ERROR_MESSAGES.required }),
  toWall: string().min(1, { message: ERROR_MESSAGES.required }),
  doorSize: doorSize.optional(),
  side: string().optional(),
});

export const WindowsValidation = z.object({
  type: string().min(1, { message: ERROR_MESSAGES.required }),
  windows: array(WindowValidation).optional(),
});

// FURNITURE
export const FurnitureValidation = z.object({
  bed: z.number(),
  bedsNumber: z.number(),
  wardrobe: z.number(),
  other: z.array(z.number()),
});

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
