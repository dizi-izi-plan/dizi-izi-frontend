'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PopperMessage } from '../Popper/PopperMessage';
import { MEASUREMENTS_STEPS } from './data';
import { SizesForm } from '../Forms/SizesForm/SizesForm';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentStep } from '@/redux/slices/measurements-slice';
import { selectCurrentStep } from '@/redux/selectors/selector';

export const Measurements = () => {
  const router = useRouter();
  const currentStep = useSelector(selectCurrentStep);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    if (currentStep === 0) {
      router.back();
    } else {
      dispatch(setCurrentStep({ currentStep: currentStep - 1 }));
    }
  };

  const handleForward = () => {
    if (currentStep === MEASUREMENTS_STEPS.length - 1) {
      router.push('/furniture');
    } else {
      dispatch(setCurrentStep({ currentStep: currentStep + 1 }));
    }
  };

  return (
    <Stack width="100%" spacing="51px">
      <Stack direction="row" justifyContent="space-between" width="100%">
        <PopperMessage tip="Назад">
          <Button variant="empty" onClick={handleBack}>
            <ArrowBackIcon />
          </Button>
        </PopperMessage>
        <Typography variant="h3" color="primary.contrastText">
          {MEASUREMENTS_STEPS[currentStep].title}
        </Typography>
        <PopperMessage tip="Вперед">
          <Button variant="empty" onClick={handleForward}>
            <ArrowForwardIcon />
          </Button>
        </PopperMessage>
      </Stack>
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Box width="74%" height="638px">
          Будет изображение
        </Box>
        <Stack width="25%">
          <SizesForm />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Measurements;
