'use client';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PopperMessage } from '@/components/Popper/PopperMessage';
import { SizesForm } from '@/components/Forms/SizesForm/SizesForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  selectIsStepValid,
  setIsStepValid,
} from '@/redux/slices/current-slice';

import { FieldNames } from './utils/types/types';
import { MeasurementsImage } from './ui/Image/Image';
import { MEASUREMENTS_STEPS } from './utils/consts/consts';
import {
  initialStepsState,
  type SizesFormType,
  SizesFormValidation,
  type StepKey,
  stepKeys,
} from '../Forms/SizesForm';

export const Measurements = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isWindowsValid, setIsWindowsValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isStepValid = useAppSelector(selectIsStepValid);

  const methods = useForm<SizesFormType>({
    defaultValues: { ...initialStepsState },
    resolver: zodResolver(SizesFormValidation),
  });

  const { control, trigger, watch, reset } = methods;

  useEffect(() => {
    const validateStep = async () => {
      const fields = MEASUREMENTS_STEPS[currentStep].fields;
      let output = await trigger(fields as FieldNames, { shouldFocus: true });

      if (currentStep === 2) {
        output = isWindowsValid;
      }

      dispatch(setIsStepValid(output));
    };

    const subscription = watch(() => {
      void validateStep();
    });

    validateStep();

    return () => subscription.unsubscribe();
  }, [watch, currentStep, dispatch, trigger, isWindowsValid]);

  useEffect(() => {
    reset((formState) => {
      const resetState: SizesFormType = { ...formState };

      for (let i = currentStep + 1; i < stepKeys.length; i++) {
        const key = stepKeys[i] as StepKey;
        // @ts-expect-error reset state of cloned formState by key
        resetState[key] = initialStepsState[key];
      }
      return resetState;
    });
  }, [currentStep, reset]);

  const handleBack = useCallback(async () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  }, [currentStep]);

  const handleForward = useCallback(async () => {
    if (!isStepValid) return;
    setCurrentStep((step) => step + 1);
  }, [isStepValid]);

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
              handleWindowsValidation={setIsWindowsValid}
            />
          </FormProvider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Measurements;
