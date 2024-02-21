'use client';

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
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Stack width="100%" spacing="51px">
      <Stack direction="row" justifyContent="space-between" width="100%">
        <PopperMessage tip={currentStep !== 0 ? 'Назад' : ''}>
          <Button
            variant="empty"
            onClick={handleBack}
            disabled={currentStep === 0}
            sx={{
              opacity: currentStep === 0 ? 0 : 1,
            }}
          >
            <ArrowBackIcon />
          </Button>
        </PopperMessage>
        <Typography
          variant="h3"
          color="primary.contrastText"
          sx={{
            opacity: currentStep === 3 ? 0 : 1,
          }}
        >
          {MEASUREMENTS_STEPS[currentStep].title}
        </Typography>
        <PopperMessage
          tip={
            currentStep === 3
              ? ''
              : isValid
              ? 'Вперед'
              : 'Закончите текущий шаг'
          }
        >
          <Button
            variant="empty"
            onClick={handleForward}
            disabled={currentStep === 3 || !isValid}
            sx={{
              opacity: currentStep === 3 ? 0 : 1,
            }}
          >
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
          display={currentStep === 3 ? 'none' : undefined}
        />
        <Stack width={currentStep === 4 ? '100%' : '23%'}>
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
