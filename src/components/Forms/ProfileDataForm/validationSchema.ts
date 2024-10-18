import {
  BirthdayValidation,
  CityValidation,
  StatusValidation,
  UsernameValidation,
} from '@/helpers/validation/validationTemplates';
import { z } from 'zod';

export const AccountFormValidation = z.object({
  username: UsernameValidation.shape.username,
  status: StatusValidation.shape.status,
  birthday: BirthdayValidation.shape.birthday,
  city: CityValidation.shape.city,
});

export type AccountFormType = z.infer<typeof AccountFormValidation>;
