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
import { useForm } from 'react-hook-form';
import { SizesFormType, SizesFormValidation } from './validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { initialStepsState } from './defaultValues';

type SizesFormProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export const SizesForm = ({ currentStep, setCurrentStep }: SizesFormProps) => {
  const handleTabChange = (event: SyntheticEvent, step: number) => {
    setCurrentStep(step);
  };

  const {
    control,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SizesFormType>({
    defaultValues: { ...initialStepsState },
    resolver: zodResolver(SizesFormValidation),
  });

  if (Object.keys(errors).length > 0) console.log('Form errors:', errors);

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
            getValues={getValues}
            setValue={setValue}
            watch={watch}
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
