import { FURNITURE, TSubsteps4 } from './step4FormData';

export enum ERoomSize {
  S = 'S',
  M = 'M',
  L = 'L',
}

type TRoomSize = ERoomSize.S | ERoomSize.M | ERoomSize.L;

type TAutoSelection = {
  [T in TRoomSize]: {
    [T in TSubsteps4]: number | number[];
  };
};

export const autoSelection: TAutoSelection = {
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
};
