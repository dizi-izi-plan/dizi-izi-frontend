import {
  MEASUREMENTS_STEPS,
  MeasurementsDataType,
} from '@/components/Measurements/data';
import { TabContentContainer } from '@/containers/TabContentContainer/TabContentContainer';
import { a11yProps } from '@/containers/TabContentContainer/tabConstants';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Walls } from './Steps/Step1';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentStep } from '@/redux/slices/measurements-slice';
import { selectCurrentStep } from '@/redux/selectors/selector';
import { useSelector } from 'react-redux';

export const SizesForm = () => {
  const currentStep = useSelector(selectCurrentStep);
  const dispatch = useAppDispatch();

  const handleTabChange = (event: SyntheticEvent, currentStep: number) => {
    dispatch(setCurrentStep({ currentStep }));
  };

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
      <TabContentContainer index={0} value={currentStep}>
        <Walls />
      </TabContentContainer>
      <TabContentContainer index={1} value={currentStep}>
        Форма для дверей
      </TabContentContainer>
      <TabContentContainer index={2} value={currentStep}>
        Форма для окон
      </TabContentContainer>
    </>
  );
};
