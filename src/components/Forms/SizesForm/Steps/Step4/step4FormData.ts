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

export enum FURNITURE {
  bed = 'furniture.bed',
  bedsNumber = 'furniture.bedsNumber',
  wardrobe = 'furniture.wardrobe',
}

export type FURNITURE_NAMES_TYPE = ObjectValues<typeof FURNITURE>;

export type TRadioItem = {
  id: number;
  name: string;
  length: number;
  width: number;
  imageSrc: string;
};

type TStep4 = {
  title: string;
  name: FURNITURE_NAMES_TYPE;
  skipSubstep: boolean;
  radioArr: TRadioItem[];
};

export const STEP4: TStep4[] = [
  {
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
      },
    ],
  },
  {
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
];
