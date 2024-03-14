// TODO: add WindowsFields
export type FieldNames = string[];

export type MeasurementsDataType = {
  tabText: string;
  title: string;
  fields: FieldNames;
};

export const MEASUREMENTS_STEPS: MeasurementsDataType[] = [
  {
    tabText: '1 шаг',
    title: 'Обмеры помещения',
    fields: ['walls.first', 'walls.second', 'walls.third', 'walls.forth'],
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
