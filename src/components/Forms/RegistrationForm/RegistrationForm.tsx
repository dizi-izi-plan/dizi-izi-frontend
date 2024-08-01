'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomLink } from '@/components/Link/CustomLink';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import { TextFieldWrapper } from '../../Input/TextFieldWrapper';
import { InputPasswordWrapper } from '../../Input/InputPassword/InputPasswordWrapper';
import {
  REGISTRATION_FORM_LABELS,
  REGISTRATION_FORM_NAMES,
} from './registrationFormConstants';
import {
  RegistrationFormType,
  RegistrationFormValidation,
} from './validationSchema';
import { useRegistrationMutation } from '@/api/apiSlice';

export const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    defaultValues: {
      [REGISTRATION_FORM_NAMES.email]: '',
      [REGISTRATION_FORM_NAMES.password]: '',
      [REGISTRATION_FORM_NAMES.re_password]: '',
    },
    resolver: zodResolver(RegistrationFormValidation),
  });

  const router = useRouter();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [responseStatus, setResponseStatus] = useState<Number>();

  const [registration, { isLoading }] = useRegistrationMutation();

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registration(data).unwrap();
      setResponseStatus(201);
      setOpenSnackbar(true);

      router.push('/registration-letter-message');
    } catch (error: any) {
      console.error(error);

      setResponseStatus(error.status);
      setOpenSnackbar(true);
    }
  });

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
              name={REGISTRATION_FORM_NAMES.re_password}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={REGISTRATION_FORM_LABELS.re_password}
              errorMessage={
                errors.re_password ? errors.re_password?.message : ' '
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
              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                'Создать личный кабинет'
              )}
            </Button>
          </Box>
        </Stack>
      </form>

      <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={responseStatus === 201 ? 'success' : 'error'}
          sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          {responseStatus === 201
            ? 'Вы успешно зарегистрировались'
            : 'Данный пользователь уже зарегистрирован'}
        </Alert>
      </Snackbar>
    </div>
  );
};
