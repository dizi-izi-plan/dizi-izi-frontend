import {
  MEASUREMENTS_STEPS,
  MeasurementsDataType,
} from '@/components/Measurements/data';
import { TabContentContainer } from '@/containers/TabContentContainer/TabContentContainer';
import { a11yProps } from '@/containers/TabContentContainer/tabConstants';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Walls } from './Steps/Step1/Step1';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { SizesFormType } from './validation';
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

type SizesFormProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  errors?: FieldErrors<SizesFormType>;
  handleSubmit: UseFormHandleSubmit<SizesFormType>;
  isValid: boolean;
};

export const SizesForm = ({
  currentStep,
  setCurrentStep,
  setValue,
  watch,
  control,
  handleSubmit,
  isValid,
}: SizesFormProps) => {
  const handleTabChange = (event: SyntheticEvent, step: number) => {
    if (isValid) setCurrentStep(step);
  };

  const onSubmit = handleSubmit((data) => {
    console.log('sizes', data);
  });

  return (
    <>
      <Tabs
        className="measurement"
        value={currentStep}
        onChange={handleTabChange}
        aria-label="measurement-steps"
        variant="fullWidth"
      >
        {MEASUREMENTS_STEPS.map((item: MeasurementsDataType, index: number) => (
          <Tab
            key={index}
            label={item.tabText}
            {...a11yProps(index)}
            sx={{ p: '0' }}
          />
        ))}
      </Tabs>
      <form onSubmit={onSubmit}>
        <TabContentContainer index={0} value={currentStep}>
          <Walls
            control={control}
            setValue={setValue}
            watch={watch}
            isValid={isValid}
          />
        </TabContentContainer>
        <TabContentContainer index={1} value={currentStep}>
          Форма для дверей
        </TabContentContainer>
        <TabContentContainer index={2} value={currentStep}>
          Форма для окон
        </TabContentContainer>
      </form>
    </>
  );
};
