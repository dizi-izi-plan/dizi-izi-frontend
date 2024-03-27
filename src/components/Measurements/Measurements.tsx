'use client';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PopperMessage } from '@/components/Popper/PopperMessage';
import { FieldNames, MEASUREMENTS_STEPS } from './data';
import { SizesForm } from '@/components/Forms/SizesForm/SizesForm';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { initialStepsState } from '@/components/Forms/SizesForm/defaultValues';
import {
  SizesFormType,
  SizesFormValidation,
} from '@/components/Forms/SizesForm/validation';

import { MeasurementsImage } from './MeasurementsImage';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  selectIsStepValid,
  setIsStepValid,
} from '@/redux/slices/current-slice';

export const Measurements = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const dispatch = useAppDispatch();
  const isStepValid = useAppSelector(selectIsStepValid);

  const methods = useForm<SizesFormType>({
    defaultValues: { ...initialStepsState },
    resolver: zodResolver(SizesFormValidation),
  });

  const { control, trigger, watch, formState } = methods;
  const { errors } = formState;

  if (Object.values(errors).length > 0) {
    console.log('errors', errors);
  }

  useEffect(() => {
    const subscription = watch((_value) => {
      void validateStep();
    });

    validateStep();

    return () => subscription.unsubscribe();
  }, [watch, currentStep]);

  const handleBack = async () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const validateStep = async () => {
    const fields = MEASUREMENTS_STEPS[currentStep].fields;
    const output = await trigger(fields as FieldNames, { shouldFocus: true });
    dispatch(setIsStepValid(output));
  };

  const handleForward = async () => {
    if (!isStepValid) return;
    setCurrentStep((step) => step + 1);
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
              : isStepValid
              ? 'Вперед'
              : 'Закончите текущий шаг'
          }
        >
          <Button
            variant="empty"
            onClick={handleForward}
            disabled={currentStep === 3 || !isStepValid}
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
        <Stack width={currentStep === 3 ? '100%' : '23%'}>
          <FormProvider {...methods}>
            <SizesForm
              currentStep={currentStep}
              handleForward={handleForward}
              handleBack={handleBack}
              setCurrentStep={setCurrentStep}
            />
          </FormProvider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Measurements;
