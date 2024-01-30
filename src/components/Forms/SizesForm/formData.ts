import { ObjectValues } from '@/types/types';

export enum WALLS {
  first = 'walls.first',
  second = 'walls.second',
  third = 'walls.third',
  forth = 'walls.forth',
}

export const CORRESPONDING_WALLS = {
  'walls.first': WALLS.third,
  'walls.second': WALLS.forth,
  'walls.third': WALLS.first,
  'walls.forth': WALLS.second,
} as const;

export type WALLS_NAMES_TYPE = ObjectValues<typeof CORRESPONDING_WALLS>;

export const STEP1 = [
  {
    number: WALLS.first,
    placeholder: 'Длина стены 1 в мм',
  },
  {
    number: WALLS.second,
    placeholder: 'Длина стены 2 в мм',
  },
  {
    number: WALLS.third,
    placeholder: 'Длина стены 3 в мм',
  },
  {
    number: WALLS.forth,
    placeholder: 'Длина стены 4 в мм',
  },
];
