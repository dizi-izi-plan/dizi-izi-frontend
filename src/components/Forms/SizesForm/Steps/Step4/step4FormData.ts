import { ObjectValues } from '@/types/types';
import bed1800x2000 from '../../../../../../public/assets/icons/furniture/bed_1800_2000.svg?url';
import bed1600x2000 from '../../../../../../public/assets/icons/furniture/bed_1600_2000.svg?url';
import bed1400x2000 from '../../../../../../public/assets/icons/furniture/bed_1400_2000.svg?url';
import bed1200x2000 from '../../../../../../public/assets/icons/furniture/bed_1200_2000.svg?url';
import bed900x2000 from '../../../../../../public/assets/icons/furniture/bed_900_2000.svg?url';

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
];
