'use client';

import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { setCurrentModal, setSnackbar } from '@/redux/slices/modal-slice';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useDeleteUserMutation } from '@/redux/slices/user-slice';
import { deleteCookie } from '@/helpers/cookie/cookie';
import { TDeleteUserError } from '@/types/api-types';
import { routes } from '@/helpers/common-constants/routes-constants';
import { InputPasswordWrapper } from '@/components/Input/InputPassword/InputPasswordWrapper';
import {
  DELETE_USER_FORM_NAMES,
  DELETE_USER_FORM_LABELS,
  DELETE_USER_FORM_PLACEHOLDER,
} from './deleteUserFormConstants';
import {
  PasswordValidation,
  PasswordFormType,
} from '@/helpers/validation/validationTemplates';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@mui/material';

export const DeleteUserForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid, isSubmitted },
    setError,
  } = useForm<PasswordFormType>({
    defaultValues: {
      [DELETE_USER_FORM_NAMES.password]: '',
    },
    resolver: zodResolver(PasswordValidation),
  });
  const dispatch = useAppDispatch();
  const [modalStep, setModalStep] = useState<1 | 2>(1);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const router = useRouter();

  const onSubmit = handleSubmit(async (deleteUserData) => {
    try {
      await deleteUser({ current_password: deleteUserData.password }).unwrap();
      router.push(routes.authRoutes.deletedUser);
      dispatch(setCurrentModal(null));
      deleteCookie('token');
    } catch (error) {
      const { data, status } = error as TDeleteUserError;
      setModalStep(1);
      if (status === 400 && data && data.current_password) {
        setError(DELETE_USER_FORM_NAMES.password, {
          type: 'server',
          message: data.current_password[0],
        });
      } else {
        dispatch(
          setSnackbar({
            isOpen: true,
            message: 'Что-то пошло не так, попробуйте еще раз',
            severity: 'error',
          }),
        );
      }
    }
  });

  useEffect(() => {
    if (isSubmitted && isValid === false && modalStep === 2) setModalStep(1);
  }, [isValid, modalStep, isSubmitted]);
  console.log(errors);
  return (
    <Box mt="40px">
      <form onSubmit={onSubmit}>
        {modalStep === 1 && (
          <Box width="330px">
            <InputPasswordWrapper
              name={DELETE_USER_FORM_NAMES.password}
              control={control}
              className={CLASS_NAMES_INPUT.light}
              label={DELETE_USER_FORM_LABELS.password}
              placeholder={DELETE_USER_FORM_PLACEHOLDER.password}
              errorMessage={errors.password ? errors.password?.message : ' '}
            />
            <Button
              variant="default"
              sx={{ color: 'black.main', width: '100%', mt: '20px' }}
              size="large"
              onClick={() => {
                setModalStep(2);
              }}
              disabled={(!isSubmitted && !isDirty) || (isSubmitted && !isValid)}
            >
              Продолжить
            </Button>
          </Box>
        )}
        {modalStep === 2 && (
          <>
            <Typography
              variant="body1"
              color="black.main"
              whiteSpace="pre-line"
            >
              Вы уверены, что хотите удалить профиль?
            </Typography>
            <Stack
              direction="row"
              width="100%"
              justifyContent="center"
              columnGap="24px"
              mt="40px"
            >
              <Button
                variant="default"
                sx={{ color: 'black.main', p: '16px' }}
                size="small"
                type="submit"
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Да'}
              </Button>
              <Button
                variant="default"
                sx={{ color: 'black.main', p: '16px' }}
                size="small"
                onClick={() => {
                  dispatch(setCurrentModal(null));
                }}
              >
                Нет
              </Button>
            </Stack>
          </>
        )}
      </form>
    </Box>
  );
};
