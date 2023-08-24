import { ObjectValues } from '../../types/types';

export const classNamesInput = {
  dark: 'subvariant-dark',
  light: 'subvariant-light',
  grey: 'subvariant-grey',
} as const;

export const classNamesLabel = {
  start: 'subvariant-start',
  end: 'subvariant-end',
} as const;

export type InputVariant = ObjectValues<typeof classNamesInput>;

export type LabelVariant = ObjectValues<typeof classNamesLabel>;
