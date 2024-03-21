import { RadioType } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { WALLS_NAMES_TYPE } from './types';

export const SIDE = {
  left: 'left',
  right: 'right',
} as const;

// WALLS
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

export const NEIGHBOR_WALLS: { [K in WALLS_NAMES_TYPE]: RadioType[] } = {
  'walls.first': [
    {
      label: 'До стены 2',
      value: SIDE.left,
    },
    { label: 'До стены 4', value: SIDE.right },
  ],
  'walls.second': [
    { label: 'До стены 1', value: SIDE.right },
    {
      label: 'До стены 3',
      value: SIDE.left,
    },
  ],
  'walls.third': [
    { label: 'До стены 2', value: SIDE.right },
    {
      label: 'До стены 4',
      value: SIDE.left,
    },
  ],
  'walls.forth': [
    {
      label: 'До стены 1',
      value: SIDE.left,
    },
    { label: 'До стены 3', value: SIDE.right },
  ],
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

// DOOR
export const OPEN = {
  inside: 'inside',
  outside: 'outside',
};

export const DOOR_NAMES = {
  wallNumber: 'door.wallNumber',
  size: 'door.size',
  distanceToWall: 'door.distanceToWall',
  toWall: 'door.toWall',
  side: 'door.side',
  open: 'door.open',
} as const;

export const STEP2 = {
  wallNumber: {
    name: DOOR_NAMES.wallNumber,
    placeholder: 'Дверь на стене номер',
    options: [
      {
        value: WALLS.first,
        text: 1,
      },
      {
        value: WALLS.second,
        text: 2,
      },
      {
        value: WALLS.third,
        text: 3,
      },
      {
        value: WALLS.forth,
        text: 4,
      },
    ],
  },
  doorSize: {
    name: DOOR_NAMES.size,
    placeholder: 'Размер двери в мм',
  },
  fromDoorTo: {
    name: DOOR_NAMES.distanceToWall,
    placeholder: 'Расстояние от двери',
  },
  toWall: {
    name: DOOR_NAMES.toWall,
  },
  openLeftRight: {
    name: DOOR_NAMES.side,
    radios: [
      { value: SIDE.left, label: 'Открывается влево' },
      {
        value: SIDE.right,
        label: 'Открывается вправо',
      },
    ],
  },
  openInsideOutside: {
    name: DOOR_NAMES.open,
    radios: [
      {
        value: OPEN.inside,
        label: 'Открывается внутрь',
      },
      {
        value: OPEN.outside,
        label: 'Открывается наружу',
      },
    ],
  },
};
