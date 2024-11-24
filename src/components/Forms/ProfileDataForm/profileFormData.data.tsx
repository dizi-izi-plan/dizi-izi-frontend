import { CheckboxWrapper } from '@/components/Input/Checkbox/CheckboxWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { LocalDatePickerWrapper } from '@/components/LocalDatePicker/LocalDatePickerWrapper';
import { FormControlLabel } from '@mui/material';
import { Control, FieldErrors } from 'react-hook-form';
import {
  PROFILE_FORM_DATA,
  PROFILE_FORM_LABELS,
  PROFILE_FORM_PLACEHOLDER,
} from './ProfileDataFormConstats';
import { AccountFormType } from './validationSchema';

export const getProfileConfig = (
  control: Control<AccountFormType>,
  errors: FieldErrors<AccountFormType>,
) => [
  <TextFieldWrapper
    name={PROFILE_FORM_DATA.username}
    key={PROFILE_FORM_DATA.username}
    control={control}
    className={CLASS_NAMES_INPUT.light}
    label={PROFILE_FORM_LABELS.username}
    errorMessage={errors.username ? errors.username?.message : ''}
  />,
  <FormControlLabel
    key={PROFILE_FORM_DATA.status}
    className={CLASS_NAMES_LABEL.start}
    label={PROFILE_FORM_LABELS.status}
    control={
      <CheckboxWrapper name={PROFILE_FORM_DATA.status} control={control} />
    }
  />,
  <LocalDatePickerWrapper
    name={PROFILE_FORM_DATA.birthday}
    key={PROFILE_FORM_DATA.birthday}
    control={control}
    label={PROFILE_FORM_LABELS.birthday}
    className={CLASS_NAMES_INPUT.light}
    errorMessage={errors.birthday ? errors.birthday?.message : ''}
  />,
  <TextFieldWrapper
    name={PROFILE_FORM_DATA.city}
    key={PROFILE_FORM_DATA.city}
    control={control}
    className={CLASS_NAMES_INPUT.light}
    label={PROFILE_FORM_LABELS.city}
    placeholder={PROFILE_FORM_PLACEHOLDER.choseCity}
    errorMessage={errors.city ? errors.city?.message : ''}
  />,
];
