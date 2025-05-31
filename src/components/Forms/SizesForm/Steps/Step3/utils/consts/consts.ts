import { RadioType } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { SIDE } from '@/components/Forms/SizesForm/utils/consts/consts';
import { WALLNUMBER_OPTIONS } from '../../../Step1/utils/consts/consts';

export const MAX_WINDOW_INPUT_LENGTH = 4;
export const MIN_WINDOW_SIZE = 400;
export const MIN_WINDOW_WITH_BALCONY_SIZE = 700;

export const MAX_WINDOWS_QUANTITY = 2;

export const WINDOW_TYPE_RADIOS: RadioType[] = [
  {
    label: 'Окно',
    value: 'window',
  },
  { label: 'Без окна', value: 'noWindow' },
];

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
