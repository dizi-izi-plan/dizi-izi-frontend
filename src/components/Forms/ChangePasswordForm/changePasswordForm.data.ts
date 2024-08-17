import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';
import {
  CHANGE_PASSWORD_FORM_DATA,
  CHANGE_PASSWORD_FORM_LABELS,
  CHANGE_PASSWORD_FORM_PLACEHOLDER,
} from './changePasswordFormConstants';
import { IPasswordFormInput } from './changePasswordFormDataTypes';
import { Control, FieldErrors } from 'react-hook-form';

export const getPasswordConfig = (
  control: Control<IPasswordFormInput>,
  errors: FieldErrors<IPasswordFormInput>,
) => [
  {
    name: CHANGE_PASSWORD_FORM_DATA.oldPassword,
    className: CLASS_NAMES_INPUT.light,
    control: control,
    label: CHANGE_PASSWORD_FORM_LABELS.oldPassword,
    placeholder: CHANGE_PASSWORD_FORM_PLACEHOLDER.oldPassword,
    errorMessage: errors.oldPassword ? errors.oldPassword?.message : ' ',
  },
  {
    name: CHANGE_PASSWORD_FORM_DATA.password,
    className: CLASS_NAMES_INPUT.light,
    control: control,
    label: CHANGE_PASSWORD_FORM_LABELS.password,
    placeholder: CHANGE_PASSWORD_FORM_PLACEHOLDER.password,
    errorMessage: errors.password ? errors.password?.message : ' ',
  },
  {
    name: CHANGE_PASSWORD_FORM_DATA.confirmPassword,
    className: CLASS_NAMES_INPUT.light,
    control: control,
    label: CHANGE_PASSWORD_FORM_LABELS.confirmPassword,
    placeholder: CHANGE_PASSWORD_FORM_PLACEHOLDER.confirmPassword,
    errorMessage: errors.confirmPassword
      ? errors.confirmPassword?.message
      : ' ',
  },
];