import {
  DOOR_NAMES_TYPE,
  WALLS_NAMES_TYPE,
} from '@/components/Forms/SizesForm';

// TODO: add WindowsFields
export type FieldNames = WALLS_NAMES_TYPE[] | DOOR_NAMES_TYPE[];

export type MeasurementsDataType = {
  tabText: string;
  title: string;
  fields: FieldNames;
};
