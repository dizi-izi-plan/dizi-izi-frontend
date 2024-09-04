import {
  MEASUREMENTS_STEPS,
  MeasurementsDataType,
} from '@/components/Measurements/data';
import { TabContentContainer } from '@/containers/TabContentContainer/TabContentContainer';
import { a11yProps } from '@/containers/TabContentContainer/tabConstants';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Furniture } from './Steps/Step4/Step4';
import { Walls } from './Steps/Step1';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Door } from './Steps/Step2';
import { useAppSelector } from '@/redux/hooks';
import { selectIsStepValid } from '@/redux/slices/current-slice';
import { SizesFormType } from './validation';
import { Windows } from './Steps/Step3/Step3';

type SizesFormProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  handleForward: () => void;
  handleBack: () => void;
};

export const SizesForm = ({
  currentStep,
  setCurrentStep,
  handleBack,
  handleForward,
}: SizesFormProps) => {
  const { handleSubmit } = useFormContext<SizesFormType>();
  const isStepValid = useAppSelector(selectIsStepValid);

  const handleTabChange = async (event: SyntheticEvent, step: number) => {
    if (step < currentStep) {
      handleBack();
    } else {
      if (!isStepValid) return;
      handleForward();
    }
    setCurrentStep(step);
  };

  const onSubmit = handleSubmit((data) => {
    console.log('sizes', data);
  });

  return (
    <>
      {currentStep < 3 && (
        <Tabs
          className="measurement"
          value={currentStep}
          onChange={handleTabChange}
          aria-label="measurement-steps"
          variant="fullWidth"
        >
          {MEASUREMENTS_STEPS.slice(0, 3).map(
            (item: MeasurementsDataType, index: number) => (
              <Tab
                key={index}
                label={item.tabText}
                {...a11yProps(index)}
                sx={{ p: '0' }}
              />
            ),
          )}
        </Tabs>
      )}
      <form onSubmit={onSubmit}>
        <TabContentContainer index={0} value={currentStep}>
          <Walls />
        </TabContentContainer>
        <TabContentContainer index={1} value={currentStep}>
          <Door />
        </TabContentContainer>
        <TabContentContainer index={2} value={currentStep}>
          <Windows />
        </TabContentContainer>
        <TabContentContainer index={3} value={currentStep}>
          <Furniture />
        </TabContentContainer>
      </form>
    </>
  );
};
