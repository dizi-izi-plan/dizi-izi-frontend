'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { TextFieldWrapper } from '../../Input/TextFieldWrapper';
import { InputPasswordWrapper } from '../../Input/InputPassword/InputPasswordWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { CustomLink } from '@/components/Link/CustomLink';
import Box from '@mui/material/Box';
import {
  REGISTRATION_FORM_LABELS,
  REGISTRATION_FORM_NAMES,
} from './registrationFormConstants';
import {
  RegistrationFormType,
  RegistrationFormValidation,
} from './validationSchema';

export const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    defaultValues: {
      [REGISTRATION_FORM_NAMES.email]: '',
      [REGISTRATION_FORM_NAMES.password]: '',
      [REGISTRATION_FORM_NAMES.confirmPassword]: '',
    },
    resolver: zodResolver(RegistrationFormValidation),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <Box mb={10}>
        <Typography
          textAlign="center"
          variant="h3"
          color="secondary.contrastText"
        >
          Зарегистрироваться
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Stack spacing={3} mb={4}>
          <Stack rowGap={4}>
            <TextFieldWrapper
              name={REGISTRATION_FORM_NAMES.email}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={REGISTRATION_FORM_LABELS.email}
              errorMessage={errors.email ? errors.email?.message : ' '}
            />
            <InputPasswordWrapper
              name={REGISTRATION_FORM_NAMES.password}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={REGISTRATION_FORM_LABELS.password}
              errorMessage={errors.password ? errors.password?.message : ' '}
            />
            <InputPasswordWrapper
              name={REGISTRATION_FORM_NAMES.confirmPassword}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={REGISTRATION_FORM_LABELS.confirmPassword}
              errorMessage={
                errors.confirmPassword ? errors.confirmPassword?.message : ' '
              }
            />
          </Stack>
          <Typography variant="caption" color="secondary.contrastText">
            {'Регистрируясь, вы соглашаетесь '}
            <CustomLink
              href="#"
              variant="xs"
              sx={{ textUnderlineOffset: '4px' }}
            >
              на обработку персональных данных.
            </CustomLink>
          </Typography>
        </Stack>

        <Stack spacing={4} alignItems="center" mb={5}>
          <Box>
            <Button variant="default" size="large" type="submit">
              Создать личный кабинет
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
};
