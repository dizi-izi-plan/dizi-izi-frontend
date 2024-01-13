'use client';

import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PopperMessage } from '../Popper/PopperMessage';
import { MEASUREMENTS_STEPS } from './data';
import { SizesForm } from '../Forms/SizesForm/SizesForm';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { initialStepsState } from '../Forms/SizesForm/defaultValues';
import {
  SizesFormType,
  SizesFormValidation,
} from '../Forms/SizesForm/validation';
import { TabContentContainer } from '../../containers/TabContentContainer/TabContentContainer';
import { a11yProps } from '../../containers/TabContentContainer/tabConstants';

import { MeasurementsImage } from './MeasurementsImage';

type MeasurementsDataType = {
  tabText: string;
  title: string;
};

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
        <Stack
          width="74%"
          height="640px"
          border="1px solid"
          mb="80px"
          alignItems="center"
          sx={(theme) => ({
            borderColor:
              currentStep === 0 ? theme.palette.myGrey.grey400 : 'transparent',
          })}
          p="70px 50px 50px 60px"
          position="relative"
        >
          <MeasurementsImage />
        </Stack>
        <Stack width="25%">
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
