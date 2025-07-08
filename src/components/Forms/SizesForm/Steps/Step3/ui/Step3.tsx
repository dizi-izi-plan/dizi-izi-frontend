'use client';
import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { Button, FormHelperText, Stack, Typography } from '@mui/material';
import {
  CLASS_NAMES_HELPER,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { SizesFormType } from '../../../utils/types/types';
import { useWindowsArrayErrors } from '../hooks/useWindowsArrayErrors';
import {
  MAX_WINDOWS_QUANTITY,
  WINDOW_NAMES,
  WINDOW_TYPE_RADIOS,
} from '../utils/consts/consts';
import { WindowWithBalcony } from './WindowWithBalcony/WindowWithBalcony';
import { Window } from './Window/Window';
import { windowDefaults, windowWithBalcony } from '../utils/defaults/defaults';
import { ERROR_MESSAGES } from '../../..';

type WindowsProps = {
  handleStepValidation: (isValid: boolean) => void;
};

export const Windows = ({ handleStepValidation }: WindowsProps) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<SizesFormType>();
  const [isWindowWithBalconyAdded, setIsWindowWithBalconyAdded] =
    useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'windows.windows',
  });

  const { isStepValid } = useWindowsArrayErrors();

  useEffect(() => {
    handleStepValidation(isStepValid);
  }, [isStepValid, handleStepValidation]);

  const handleAddWindow = () => {
    if (fields.length < MAX_WINDOWS_QUANTITY) {
      append(windowDefaults);
    }
  };

  const handleAddWindowWithBalcony = () => {
    if (fields.length < MAX_WINDOWS_QUANTITY) {
      append(windowWithBalcony);
    }
    setIsWindowWithBalconyAdded(true);
  };

  const removeWindowWithBalcony = (index: number) => {
    remove(index);
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
                handleRemove={() => remove(index)}
              />
            );
          })}
          {fields.length === 2 && (
            <FormHelperText className={CLASS_NAMES_HELPER.centered}>
              {ERROR_MESSAGES.maxWindowAmount}
            </FormHelperText>
          )}
          {errors?.windows?.windows?.message && (
            <FormHelperText className={CLASS_NAMES_HELPER.centered}>
              {errors?.windows?.windows?.message}
            </FormHelperText>
          )}
          <Button
            variant="default"
            sx={{ color: 'black.main', fontSize: '14px' }}
            onClick={handleAddWindow}
            disabled={fields.length === 2}
          >
            Добавить окно
          </Button>
          <Button
            variant="default"
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
