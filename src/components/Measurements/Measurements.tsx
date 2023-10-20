'use client';

import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { PopperMessage } from '../Popper/PopperMessage';
import { TabContentContainer } from '../../containers/TabContentContainer/TabContentContainer';
import { a11yProps } from '../../containers/TabContentContainer/tabConstants';

type MeasurementsDataType = {
  tabText: string;
  title: string;
};

export const Measurements = () => {
  const router = useRouter();
  const [value, setValue] = useState<number>(0);

  const MEASUREMENTS_STEPS: MeasurementsDataType[] = [
    { tabText: '1 шаг', title: 'Обмеры помещения' },
    { tabText: '2 шаг', title: 'Обозначение дверей' },
    { tabText: '3 шаг', title: 'Обозначение окон и балконной двери' },
  ];

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleBack = () => {
    if (value === 0) {
      router.back();
    } else {
      setValue((val) => val - 1);
    }
  };

  const handleForward = () => {
    if (value === MEASUREMENTS_STEPS.length - 1) {
      router.push('/furniture');
    } else {
      setValue((val) => val + 1);
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
          {MEASUREMENTS_STEPS[value].title}
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
        <Stack width="23%">
          <Tabs
            className="measurement"
            value={value}
            onChange={handleChange}
            aria-label="measurment-steps"
            variant="fullWidth"
          >
            {MEASUREMENTS_STEPS.map(
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
          <TabContentContainer index={0} value={value}>
            Форма для стен
          </TabContentContainer>
          <TabContentContainer index={1} value={value}>
            Форма для дверей
          </TabContentContainer>
          <TabContentContainer index={2} value={value}>
            Форма для окон
          </TabContentContainer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Measurements;
