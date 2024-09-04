import { useFormContext } from 'react-hook-form';
import {
  RadioGroupWrapper,
  RadioType,
} from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { Button, Stack, Typography } from '@mui/material';
import { SizesFormType } from '../../validation';
import { CLASS_NAMES_LABEL } from '@/components/Input/classNameConstants';
import { Window } from './Window';
import { WINDOW_NAMES } from '../../formData';

const WINDOW_TYPE_RADIOS: RadioType[] = [
  {
    label: 'Окно',
    value: 'window',
  },
  { label: 'Без окна', value: 'noWindow' },
];

export const Windows = () => {
  const { control, watch } = useFormContext<SizesFormType>();

  return (
    <Stack gap={3}>
      <Typography variant="body1" color="second.main">
        Выберите тип окна
      </Typography>
      <RadioGroupWrapper
        name={WINDOW_NAMES.type}
        control={control}
        className={CLASS_NAMES_LABEL.end}
        radios={WINDOW_TYPE_RADIOS}
        row={true}
        groupSx={{
          gap: 2,
          marginLeft: '10px',
        }}
        labelSx={{
          flex: 1,
          marginRight: 0,
        }}
      />
      {watch(WINDOW_NAMES.type) === 'window' && (
        <>
          <Window />
          <Button
            variant="default"
            size="large"
            sx={{ color: 'black.main', fontSize: '14px' }}
          >
            Добавить окно
          </Button>
          <Button
            variant="default"
            size="large"
            sx={{ color: 'black.main', fontSize: '14px' }}
          >
            Добавить окно с балконом
          </Button>
        </>
      )}
    </Stack>
  );
};
