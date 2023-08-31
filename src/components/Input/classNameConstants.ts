import { ObjectValues } from '../../types/types';

export const CLASS_NAMES_INPUT = {
  dark: 'subvariant-dark',
  light: 'subvariant-light',
  grey: 'subvariant-grey',
} as const;

// TODO: FIX TYPO
export const CLASS_NAMES_LABEL = {
  start: 'subvariant-start',
  end: 'subvariant-end',
} as const;

export type InputVariant = ObjectValues<typeof CLASS_NAMES_INPUT>;

export type LabelVariant = ObjectValues<typeof CLASS_NAMES_LABEL>;
