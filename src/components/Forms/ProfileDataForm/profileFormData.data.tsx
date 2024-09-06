import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { LocalDatePicker } from '@/components/LocalDatePicker/LocalDatePicker';
import { AutocompleteCities } from '@/components/SelectTextField/AutocompleteCities';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  PROFILE_FORM_DATA,
  PROFILE_FORM_LABELS,
  PROFILE_FORM_PLACEHOLDER,
} from './ProfileDataFormConstants';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { Control, FieldErrors } from 'react-hook-form';
import { IProfileFormInput } from './profileDataFormDataTypes';

export const getProfileConfig = (
  control: Control<IProfileFormInput>,
  errors: FieldErrors<IProfileFormInput>,
) => [
  <TextFieldWrapper
    key={PROFILE_FORM_DATA.username}
    name={PROFILE_FORM_DATA.username}
    control={control}
    className={CLASS_NAMES_INPUT.light}
    label={PROFILE_FORM_LABELS.username}
    errorMessage={errors.username ? errors.username?.message : ' '}
  />,
  <FormControlLabel
    key={PROFILE_FORM_DATA.status}
    className={CLASS_NAMES_LABEL.start}
    label={PROFILE_FORM_LABELS.status}
    control={<Checkbox />}
  />,
  <LocalDatePicker
    key={PROFILE_FORM_DATA.birthday}
    label={PROFILE_FORM_LABELS.birthday}
    className={CLASS_NAMES_INPUT.light}
  />,
  <AutocompleteCities
    key={PROFILE_FORM_DATA.city}
    label={PROFILE_FORM_LABELS.city}
    placeholder={PROFILE_FORM_PLACEHOLDER.choseCity}
    className={CLASS_NAMES_INPUT.light}
  />,
];
