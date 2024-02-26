import { ObjectValues } from '@/types/types';
import bed1800x2000 from '../../../../../../public/assets/icons/furniture/beds/bed_1800_2000.svg?url';
import bed1600x2000 from '../../../../../../public/assets/icons/furniture/beds/bed_1600_2000.svg?url';
import bed1400x2000 from '../../../../../../public/assets/icons/furniture/beds/bed_1400_2000.svg?url';
import bed1200x2000 from '../../../../../../public/assets/icons/furniture/beds/bed_1200_2000.svg?url';
import bed900x2000 from '../../../../../../public/assets/icons/furniture/beds/bed_900_2000.svg?url';

import wardrobe600x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_600_600.svg?url';
import wardrobe1000x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_1000_600.svg?url';
import wardrobe1200x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_1200_600.svg?url';
import wardrobe1200x1200 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_1200_1200.svg?url';
import wardrobe1400x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_1400_600.svg?url';
import wardrobe1600x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_1600_600.svg?url';
import wardrobe1800x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_1800_600.svg?url';
import wardrobe2000x600 from '../../../../../../public/assets/icons/furniture/wardrobes/wardrobe_2000_600.svg?url';

import armchair800X800 from '../../../../../../public/assets/icons/furniture/other/armchair_800_800.svg?url';
import bedsideTable400x400 from '../../../../../../public/assets/icons/furniture/other/bedside-table_400_400.svg?url';
import bureau from '../../../../../../public/assets/icons/furniture/other/bureau.svg?url';
import chest900x500 from '../../../../../../public/assets/icons/furniture/other/chest_900_500.svg?url';
import chidBed1200x900 from '../../../../../../public/assets/icons/furniture/other/chid-bed_1200_900.svg?url';
import desk from '../../../../../../public/assets/icons/furniture/other/desk.svg?url';
import dresser900x800 from '../../../../../../public/assets/icons/furniture/other/dresser_900_800.svg?url';
import nightstand600x600 from '../../../../../../public/assets/icons/furniture/other/nightstand_600_600.svg?url';
import plant from '../../../../../../public/assets/icons/furniture/other/plant.svg?url';
import TVChest from '../../../../../../public/assets/icons/furniture/other/TV-chest.svg?url';
import TV from '../../../../../../public/assets/icons/furniture/other/TV.svg?url';

export enum FURNITURE {
  bed = 'furniture.bed',
  bedsNumber = 'furniture.bedsNumber',
  wardrobe = 'furniture.wardrobe',
  other = 'furniture.other',
}

export type FURNITURE_NAMES_TYPE = ObjectValues<typeof FURNITURE>;

export type TRadioItem = {
  id: number;
  name: string;
  length: number;
  width: number;
  imageSrc: string;
  className?: string;
  maxNumber?: number;
};

type TSubtep4 = {
  title: string;
  name: FURNITURE_NAMES_TYPE;
  skipSubstep: boolean;
  radioArr: TRadioItem[];
};

export type TSubsteps4 = FURNITURE.bed | FURNITURE.wardrobe | FURNITURE.other;

type TStep4 = {
  [T in TSubsteps4]: TSubtep4;
};

export const STEP4: TStep4 = {
  [FURNITURE.bed]: {
    title: 'Выберите кровать',
    name: FURNITURE.bed,
    skipSubstep: false,
    radioArr: [
      {
        id: 1,
        name: '1800x2000',
        length: 2000,
        width: 1800,
        imageSrc: bed1800x2000,
      },
      {
        id: 2,
        name: '1600x2000',
        length: 2000,
        width: 1600,
        imageSrc: bed1600x2000,
      },
      {
        id: 3,
        name: '1400x2000',
        length: 2000,
        width: 1400,
        imageSrc: bed1400x2000,
      },
      {
        id: 4,
        name: '1200x2000',
        length: 2000,
        width: 1200,
        imageSrc: bed1200x2000,
      },
      {
        id: 5,
        name: '900x2000',
        length: 2000,
        width: 900,
        imageSrc: bed900x2000,
        maxNumber: 2,
      },
    ],
  },
  [FURNITURE.wardrobe]: {
    title: 'Выберите шкаф',
    name: FURNITURE.wardrobe,
    skipSubstep: true,
    radioArr: [
      {
        id: 6,
        name: '600x600',
        length: 600,
        width: 600,
        imageSrc: wardrobe600x600,
      },
      {
        id: 7,
        name: '1000x600',
        length: 1000,
        width: 600,
        imageSrc: wardrobe1000x600,
      },
      {
        id: 8,
        name: '1200x600',
        length: 1200,
        width: 600,
        imageSrc: wardrobe1200x600,
      },
      {
        id: 9,
        name: '1400x600',
        length: 1400,
        width: 600,
        imageSrc: wardrobe1400x600,
      },
      {
        id: 10,
        name: '1200x1200',
        length: 1200,
        width: 1200,
        imageSrc: wardrobe1200x1200,
        className: 'conicGradient',
      },
      {
        id: 11,
        name: '1600x600',
        length: 1600,
        width: 600,
        imageSrc: wardrobe1600x600,
      },
      {
        id: 12,
        name: '1800x600',
        length: 1800,
        width: 600,
        imageSrc: wardrobe1800x600,
      },
      {
        id: 13,
        name: '2000x600',
        length: 2000,
        width: 600,
        imageSrc: wardrobe2000x600,
      },
    ],
  },
  [FURNITURE.other]: {
    title: 'Выберите мебель',
    name: FURNITURE.other,
    skipSubstep: true,
    radioArr: [
      {
        id: 14,
        name: 'Детская кроватка',
        length: 1200,
        width: 900,
        imageSrc: chidBed1200x900,
      },
      {
        id: 15,
        name: 'Кресло',
        length: 800,
        width: 800,
        imageSrc: armchair800X800,
      },
      {
        id: 16,
        name: 'Прикроватная тумба',
        length: 600,
        width: 600,
        imageSrc: nightstand600x600,
      },
      {
        id: 17,
        name: 'Комод',
        length: 900,
        width: 500,
        imageSrc: chest900x500,
      },
      {
        id: 18,
        name: 'Растение',
        length: 300,
        width: 300,
        imageSrc: plant,
      },
      {
        id: 19,
        name: 'Прикроватный столик',
        length: 400,
        width: 400,
        imageSrc: bedsideTable400x400,
      },
      {
        id: 20,
        name: 'Письменный стол со стулом',
        length: 1200,
        width: 600,
        imageSrc: desk,
      },
      {
        id: 21,
        name: 'Бюро со стулом',
        length: 800,
        width: 400,
        imageSrc: bureau,
      },
      {
        id: 22,
        name: 'Туалетный столик',
        length: 900,
        width: 400,
        imageSrc: dresser900x800,
      },
      {
        id: 23,
        name: 'Комод с телевизором',
        length: 1200,
        width: 500,
        imageSrc: TVChest,
      },
      {
        id: 24,
        name: 'Телевизор',
        length: 1126,
        width: 400, // ??
        imageSrc: TV,
      },
    ],
  },
};
