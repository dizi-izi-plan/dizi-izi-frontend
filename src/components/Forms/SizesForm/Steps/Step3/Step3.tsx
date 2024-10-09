import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  RadioGroupWrapper,
  RadioType,
} from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { Button, FormHelperText, Stack, Typography } from '@mui/material';
import {
  CLASS_NAMES_HELPER,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { Window } from './Window';
import { WINDOW_NAMES } from '../../formData';
import { WindowWithBalcony } from './WindowWithBalcony';
import { window as win, windowWithBalcony } from '../../defaultValues';
import { SizesFormType } from '../../types';
import { ERROR_MESSAGES } from '../utils/consts';
import { useWindowsArrayErrors } from './hooks/useWindowsArrayErrors';

const WINDOW_TYPE_RADIOS: RadioType[] = [
  {
    label: 'Окно',
    value: 'window',
  },
  { label: 'Без окна', value: 'noWindow' },
];

export const Windows = () => {
  const { control, watch } = useFormContext<SizesFormType>();
  const [isWindowWithBalconyAdded, setIsWindowWithBalconyAdded] =
    useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'windows.windows',
  });

  useWindowsArrayErrors();

  const handleAddWindow = () => {
    if (fields.length < 2) {
      append(win);
    }
  };

  const handleAddWindowWithBalcony = () => {
    if (fields.length < 2) {
      append(windowWithBalcony);
    }
    setIsWindowWithBalconyAdded(true);
  };

  const removeElement = (index: number) => {
    remove(index);
  };

  const removeWindowWithBalcony = (index: number) => {
    removeElement(index);
    setIsWindowWithBalconyAdded(false);
  };

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
          {fields.map((field, index) => {
            if ('doorSize' in field) {
              return (
                <WindowWithBalcony
                  key={field.id}
                  index={index}
                  handleRemove={removeWindowWithBalcony}
                />
              );
            }
            return (
              <Window
                key={field.id}
                index={index}
                handleRemove={removeElement}
              />
            );
          })}
          {fields.length === 2 && (
            <FormHelperText className={CLASS_NAMES_HELPER.centered}>
              {ERROR_MESSAGES.maxWindowAmount}
            </FormHelperText>
          )}
          <Button
            variant="default"
            size="large"
            sx={{ color: 'black.main', fontSize: '14px' }}
            onClick={handleAddWindow}
            disabled={fields.length === 2}
          >
            Добавить окно
          </Button>
          <Button
            variant="default"
            size="large"
            sx={{ color: 'black.main', fontSize: '14px' }}
            onClick={handleAddWindowWithBalcony}
            disabled={fields.length === 2 || isWindowWithBalconyAdded}
          >
            Добавить окно с балконом
          </Button>
        </>
      )}
    </Stack>
  );
};
