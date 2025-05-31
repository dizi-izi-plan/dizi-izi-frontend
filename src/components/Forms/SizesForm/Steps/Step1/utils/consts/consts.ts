import { SIDE } from '@/components/Forms/SizesForm/utils/consts/consts';
import { ObjectValues } from '@/types/types';

export const MIN_WALLS_INPUT_LENGTH = 4;
export const MAX_WALLS_INPUT_LENGTH = 4;
export const MIN_WALLS_VALUE = 1000;

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

export const NEIGHBOR_WALLS: {
  [K in WALLS_NAMES_TYPE]: { [key: string]: string };
} = {
  'walls.first': {
    [WALLS.second]: SIDE.left,
    [WALLS.forth]: SIDE.right,
  },
  'walls.second': {
    [WALLS.first]: SIDE.right,
    [WALLS.third]: SIDE.left,
  },

  'walls.third': {
    [WALLS.second]: SIDE.right,
    [WALLS.forth]: SIDE.left,
  },

  'walls.forth': {
    [WALLS.first]: SIDE.left,
    [WALLS.third]: SIDE.right,
  },
};

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

export const WALLNUMBER_OPTIONS = [
  {
    key: 1,
    value: WALLS.first,
    text: 1,
  },
  {
    key: 2,
    value: WALLS.second,
    text: 2,
  },
  {
    key: 3,
    value: WALLS.third,
    text: 3,
  },
  {
    key: 4,
    value: WALLS.forth,
    text: 4,
  },
];

export const ALLOWED_KEYS = new Set([
  'Tab',
  'Enter',
  'Backspace',
  'Delete',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
]);
