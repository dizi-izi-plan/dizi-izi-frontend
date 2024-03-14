import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { SizesFormType } from './validation';
import { CORRESPONDING_WALLS, DOOR_NAMES } from './formData';
import { ObjectValues } from '@/types/types';

export type FormProps = {
  getValues?: UseFormGetValues<SizesFormType>;
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  setError?: UseFormSetError<SizesFormType>;
  control: Control<SizesFormType>;
  isValid?: boolean;
  errors?: FieldErrors<SizesFormType>;
  validateStep?: () => Promise<boolean>;
};

export type WALLS_NAMES_TYPE = ObjectValues<typeof CORRESPONDING_WALLS>;
export type DOOR_NAMES_TYPE = ObjectValues<typeof DOOR_NAMES>;
