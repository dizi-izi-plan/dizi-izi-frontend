import { ObjectValues } from '@/types/types';
import { AUTO_SELECTION, FURNITURE, ROOM_SIZES } from '../consts/consts';

export type TRadioItem = {
  id: number;
  name: string;
  length: number;
  width: number;
  imageSrc: string;
  className?: string;
  maxNumber?: number;
};

export type TSubtep4 = {
  title: string;
  name: FURNITURE_NAMES_TYPE;
  skipSubstep: boolean;
  radioArr: TRadioItem[];
};

export type TStep4 = {
  [T in TSubsteps4]: TSubtep4;
};

export type TSubsteps4 = FURNITURE.bed | FURNITURE.wardrobe | FURNITURE.other;
export type TAutoSelection = ObjectValues<typeof AUTO_SELECTION>;
export type FURNITURE_NAMES_TYPE = ObjectValues<typeof FURNITURE>;
export type ROOM_SIZES_TYPE = ObjectValues<typeof ROOM_SIZES>;
