import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';

import { Control, FieldErrors } from 'react-hook-form';
import {
  CHANGE_PASSWORD_FORM_DATA,
  CHANGE_PASSWORD_FORM_LABELS,
  CHANGE_PASSWORD_FORM_PLACEHOLDER,
} from './changePasswordFormConstants';
import { ChangePasswordFormType } from './validationSchema';

export const getPasswordConfig = (
  control: Control<ChangePasswordFormType>,
  errors: FieldErrors<ChangePasswordFormType>,
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
