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

export const NEIGHBOR_WALLS: {
  [K in WALLS_NAMES_TYPE]: { [key: number]: string };
} = {
  'walls.first': {
    2: SIDE.left,
    4: SIDE.right,
  },
  'walls.second': {
    1: SIDE.right,
    3: SIDE.left,
  },

  'walls.third': {
    2: SIDE.right,
    4: SIDE.left,
  },

  'walls.forth': {
    1: SIDE.left,
    3: SIDE.right,
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
    options: [...WALLNUMBER_OPTIONS],
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

// WINDOWS
export const WINDOW_NAMES = {
  type: 'windows.type',
  wallNumber: 'wallNumber',
  size: 'size',
  distanceToWall: 'distanceToWall',
  toWall: 'toWall',
} as const;

export const WINDOW_WITH_BALCONY_NAMES = {
  ...WINDOW_NAMES,
  doorSize: 'doorSize',
  side: 'side',
} as const;

export const STEP3 = {
  wallNumber: {
    name: WINDOW_NAMES.wallNumber,
    placeholder: 'Окно на стене номер',
    options: [...WALLNUMBER_OPTIONS],
  },
  windowSize: {
    name: WINDOW_NAMES.size,
    placeholder: 'Длина окна в мм',
  },
  doorSize: {
    name: WINDOW_WITH_BALCONY_NAMES.doorSize,
    placeholder: 'Длина двери в мм',
  },
  fromWindowTo: {
    name: WINDOW_NAMES.distanceToWall,
    placeholder: 'Расстояние от окна',
  },
  toWall: {
    name: WINDOW_NAMES.toWall,
  },
  openLeftRight: {
    name: WINDOW_WITH_BALCONY_NAMES.side,
    radios: [
      { value: SIDE.left, label: 'Открывается влево' },
      {
        value: SIDE.right,
        label: 'Открывается вправо',
      },
    ],
  },
};
