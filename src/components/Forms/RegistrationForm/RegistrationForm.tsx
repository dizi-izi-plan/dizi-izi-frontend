'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
import { useRegistrationMutation } from '@/redux/slices/auth-slice';
import { RegistrationError } from '@/types/api-types';
import { routes } from '@/helpers/common-constants/routes-constants';

export const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    setError,
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

  const [registration, { isLoading }] = useRegistrationMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registration(data).unwrap();

      localStorage.setItem('email', data.email);

      router.push(routes.authRoutes.registrationLetterMessage);
    } catch (error) {
      const { status, data } = error as RegistrationError;

      if (status === 400 && data) {
        setError(REGISTRATION_FORM_NAMES.email, {
          type: 'server',
          message: data.email[0],
        });

        console.error(error);
      }
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
    </div>
  );
};
