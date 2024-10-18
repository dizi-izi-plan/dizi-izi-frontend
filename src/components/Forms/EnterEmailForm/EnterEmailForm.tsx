'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { TextFieldWrapper } from '../../Input/TextFieldWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import {
  LoginValidation,
  LoginFormType,
} from '@/helpers/validation/validationTemplates';
import { useResetPasswordMutation } from '@/redux/slices/auth-slice';

const ENTER_EMAIL_FORM_NAMES = {
  email: 'email',
} as const;

const ENTER_EMAIL_FORM_LABELS = {
  email: 'Почта',
} as const;

export const EnterEmailForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(LoginValidation),
  });
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [resetPassword, { isLoading, error }] = useResetPasswordMutation();

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
      await resetPassword(data).unwrap();

      localStorage.setItem('email', data.email);

      router.push('/reset-password-message');
    } catch (error) {
      console.error(error);
      setOpenSnackbar(true);
    }
  });

  console.log(error);
  return (
    <div>
      <Box mb="80px">
        <Typography
          textAlign="center"
          variant="h3"
          color="secondary.contrastText"
        >
          Введите почту, которая привязана к личному кабинету
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Stack spacing={3} mb={4}>
          <Stack rowGap={6}>
            <TextFieldWrapper
              name={ENTER_EMAIL_FORM_NAMES.email}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={ENTER_EMAIL_FORM_LABELS.email}
              errorMessage={errors.email ? errors.email?.message : ' '}
            />
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                'Получить код'
              )}
            </Button>
          </Box>
        </Stack>
      </form>

      <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          {error as string} {/* TODO: проверить ошибку и ее data */}
        </Alert>
      </Snackbar>
    </div>
  );
};
