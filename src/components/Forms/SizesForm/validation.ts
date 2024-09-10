import { z, number, string, array } from 'zod';
import { WALL_NUM } from './types';
import { DOOR_NAMES } from './formData';

export const MIN_WALLS_INPUT_LENGTH = 4;
export const MAX_WALLS_INPUT_LENGTH = 4;
export const MAX_DOOR_INPUT_LENGTH = 3;
export const MAX_WINDOW_INPUT_LENGTH = 4;

export const MIN_WALLS_VALUE = 1000;
export const MIN_DOOR_SIZE = 700;
export const MAX_DOOR_SIZE = 900;
export const MIN_DOOR_DISTANCE_TO_WALL = 50;
export const MIN_WINDOW_SIZE = 400;
export const MIN_WINDOW_WITH_BALCONY_SIZE = 700;

export const ERROR_MESSAGES = {
  required: 'Обязательное поле',
  minWallsSizes: 'Длина стены не может быть меньше 1000мм',
  doorSizes: 'Размер двери не может быть меньше 700мм и больше 900мм',
  minWindowSize: 'Размер окна не может быть меньше 400мм',
  minWindowWithBalconySize: 'Размер окна не может быть меньше 700мм',
  maxWindowSize: 'Размер окна не может быть больше размера выбранной стены',
  minDistanceToWall: 'Расстояние от двери до стены не может быть меньше 50мм',
  maxDistanceToWall: 'Расстояние от двери до стены слишком большое',
  maxWindowAmount: 'Количество окон не может превышать 2шт.',
};

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

const checkDistanceToWall = (
  values: SizesFormType,
  context: z.RefinementCtx,
) => {
  const distanceToWall = values.door.distanceToWall;
  if (Number(distanceToWall) < MIN_DOOR_DISTANCE_TO_WALL) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: ERROR_MESSAGES.minDistanceToWall,
      path: [DOOR_NAMES.distanceToWall],
    });
    return;
  }

  const wallNum = values.door.wallNumber.split('.')[1] as WALL_NUM;
  const wallLength = values.walls[wallNum];
  const doorSize = values.door.size;
  const restLength =
    Number(wallLength) -
    Number(doorSize) -
    Number(distanceToWall) -
    MIN_DOOR_DISTANCE_TO_WALL;

  if (restLength < 0) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: ERROR_MESSAGES.maxDistanceToWall,
      path: [DOOR_NAMES.distanceToWall],
    });
    return;
  }
};

// WINDOW
const windowSize = z
  .string()
  .min(1, { message: ERROR_MESSAGES.required })
  .refine(
    (value) => Number(value) >= MIN_WINDOW_SIZE && Number(value), // ADD CHECK FOR CURRENT WALL SIZE >= MAX_WINDOW_SIZE
    {
      message: ERROR_MESSAGES.minWindowSize,
    },
  );

export const WindowValidation = z.object({
  wallNumber: string().min(1, { message: ERROR_MESSAGES.required }),
  size: windowSize,
  distanceToWall: string().min(1, { message: ERROR_MESSAGES.required }), // add check for distance
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
    if (values.door.distanceToWall) checkDistanceToWall(values, context);
  });

export type SizesFormType = z.infer<typeof SizesFormValidation>;
