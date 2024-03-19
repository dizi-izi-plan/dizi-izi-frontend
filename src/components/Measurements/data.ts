import { WALLS } from '../Forms/SizesForm/formData';
import { DOOR_NAMES_TYPE, WALLS_NAMES_TYPE } from '../Forms/SizesForm/types';

// TODO: add WindowsFields
export type FieldNames = WALLS_NAMES_TYPE[] | DOOR_NAMES_TYPE[];

export type MeasurementsDataType = {
  tabText: string;
  title: string;
  fields: FieldNames;
};

export const MEASUREMENTS_STEPS: MeasurementsDataType[] = [
  {
    tabText: '1 шаг',
    title: 'Обмеры помещения',
    fields: [WALLS.first, WALLS.second, WALLS.third, WALLS.forth],
  },
  {
    tabText: '2 шаг',
    title: 'Обозначение дверей',
    fields: [
      'door.wallNumber',
      'door.size',
      'door.distanceToWall',
      'door.toWall',
      'door.side',
      'door.open',
    ],
  },
  { tabText: '3 шаг', title: 'Обозначение окон и балконной двери', fields: [] },
  { tabText: '4 шаг', title: 'Выбор мебели', fields: [] },
];
