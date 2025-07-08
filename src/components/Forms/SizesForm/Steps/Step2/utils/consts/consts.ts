import { OPEN, SIDE } from '@/components/Forms/SizesForm/utils/consts/consts';
import { WALLNUMBER_OPTIONS } from '../../../Step1/utils/consts/consts';

export const MAX_DOOR_INPUT_LENGTH = 3;
export const MIN_DOOR_SIZE = 700;
export const MAX_DOOR_SIZE = 900;

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
