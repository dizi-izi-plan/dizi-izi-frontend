import { ObjectValues } from '@/types/types';
import { FURNITURE } from './step4FormData';

export enum ERoomSize {
  S = 'S',
  M = 'M',
  L = 'L',
}

export const AUTO_SELECTION = {
  [ERoomSize.S]: {
    [FURNITURE.bed]: 4,
    [FURNITURE.wardrobe]: 8,
    [FURNITURE.other]: [23, 19],
  },
  [ERoomSize.M]: {
    [FURNITURE.bed]: 2,
    [FURNITURE.wardrobe]: 11,
    [FURNITURE.other]: [23, 19, 20],
  },
  [ERoomSize.L]: {
    [FURNITURE.bed]: 1,
    [FURNITURE.wardrobe]: 12,
    [FURNITURE.other]: [19, 22, 15, 23],
  },
} as const;

export type TAutoSelection = ObjectValues<typeof AUTO_SELECTION>;

export const ROOM_SIZES = {
  roomArea: {
    L: 16000000,
    M: 12000000,
  },
  filledAreaPercent: 0.65,
} as const;

export type ROOM_SIZES_TYPE = ObjectValues<typeof ROOM_SIZES>;
