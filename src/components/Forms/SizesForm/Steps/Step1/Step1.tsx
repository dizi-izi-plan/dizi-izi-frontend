import { FocusEvent } from 'react';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';
import { Stack, Typography } from '@mui/material';
import { CORRESPONDING_WALLS, STEP1, WALLS_NAMES_TYPE } from '../../formData';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import {
  ERROR_MESSAGES,
  MAX_WALLS_INPUT_LENGTH,
  MIN_WALLS_INPUT_LENGTH,
  SizesFormType,
} from '../../validation';

type WallsProps = {
  setValue: UseFormSetValue<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
  isValid: boolean;
};

export const Walls = ({ setValue, control, isValid }: WallsProps) => {
  const getCorrespondingWall = (name: string): WALLS_NAMES_TYPE => {
    return CORRESPONDING_WALLS[name as WALLS_NAMES_TYPE];
  };

  const setCorrespondingWallValue = (name: string, newValue: string) => {
    const correspondingWall = getCorrespondingWall(name);
    setValue(`${correspondingWall}`, newValue, {
      shouldValidate: true,
    });
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCorrespondingWallValue(target.name, target.value);
  };

  return (
    <Stack gap={3}>
      {STEP1.map((field, ind) => (
        <TextFieldWrapper
          key={ind}
          name={`${field.number}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          onBlur={onBlur}
          placeholder={field.placeholder}
          type="number"
          min={MIN_WALLS_INPUT_LENGTH}
          max={MAX_WALLS_INPUT_LENGTH}
        />
      ))}
      {!isValid && (
        <Typography variant="caption" color="error" textAlign="center">
          {ERROR_MESSAGES.minWallsSizes}
        </Typography>
      )}
    </Stack>
  );
};
