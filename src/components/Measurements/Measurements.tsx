'use client';

import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PopperMessage } from '@/components/Popper/PopperMessage';
import { MEASUREMENTS_STEPS } from './data';
import { SizesForm } from '@/components/Forms/SizesForm/SizesForm';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { initialStepsState } from '@/components/Forms/SizesForm/defaultValues';
import {
  SizesFormType,
  SizesFormValidation,
} from '@/components/Forms/SizesForm/validation';

import { MeasurementsImage } from './MeasurementsImage';

export const Measurements = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SizesFormType>({
    defaultValues: { ...initialStepsState },
    resolver: zodResolver(SizesFormValidation),
  });

  const handleBack = () => {
    if (isValid) {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  const handleForward = () => {
    if (isValid) {
      if (currentStep === MEASUREMENTS_STEPS.length - 1) {
        router.push('/furniture');
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  return (
    <Stack width="100%" spacing="51px">
      <Stack direction="row" justifyContent="space-between" width="100%">
        {currentStep > 0 && (
          <PopperMessage tip="Назад">
            <Button variant="empty" onClick={handleBack}>
              <ArrowBackIcon />
            </Button>
          </PopperMessage>
        )}
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
        <MeasurementsImage
          stepOne={currentStep === 0}
          stepTwo={currentStep === 1}
          stepThree={currentStep === 2}
          control={control}
        />
        <Stack width="23%">
          <SizesForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            control={control}
            setValue={setValue}
            watch={watch}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Measurements;
