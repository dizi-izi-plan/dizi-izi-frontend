import { CORRESPONDING_WALLS } from '@/components/Forms/SizesForm/Steps/Step1/utils/consts/consts';
import { DOOR_NAMES } from '@/components/Forms/SizesForm/Steps/Step2/utils/consts/consts';
import { MeasurementsDataType } from '../types/types';

export const MEASUREMENTS_STEPS: MeasurementsDataType[] = [
  {
    tabText: '1 шаг',
    title: 'Обмеры помещения',
    fields: Object.values(CORRESPONDING_WALLS),
  },
  {
    tabText: '2 шаг',
    title: 'Обозначение дверей',
    fields: Object.values(DOOR_NAMES),
  },
  { tabText: '3 шаг', title: 'Обозначение окон и балконной двери', fields: [] },
  { tabText: '4 шаг', title: 'Выбор мебели', fields: [] },
];
