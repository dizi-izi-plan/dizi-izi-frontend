import { FocusEvent } from 'react';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';
import { Stack } from '@mui/material';
import { CORRESPONDING_WALLS, STEP1, WALLS_NAMES_TYPE } from '../../formData';
import {
  Control,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { SizesFormType } from '../../validation';

const INPUT_LIMIT_NUMBER = 4;

type WallsProps = {
  setValue: UseFormSetValue<SizesFormType>;
  getValues: UseFormGetValues<SizesFormType>;
  watch: UseFormWatch<SizesFormType>;
  control: Control<SizesFormType>;
};

export const Walls = ({ setValue, control }: WallsProps) => {
  const getCorrespondingWall = (name: string): WALLS_NAMES_TYPE => {
    const wallName = name.replace('walls.', '') as WALLS_NAMES_TYPE;
    return CORRESPONDING_WALLS[wallName];
  };

  const setCorrespondingWallValue = (name: string, newValue: string) => {
    const correspondingWall = getCorrespondingWall(name);
    setValue(`walls.${correspondingWall}`, newValue);
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
          name={`walls.${field.number}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          onBlur={onBlur}
          errorMessage={''}
          placeholder={field.placeholder}
          type="number"
          min={INPUT_LIMIT_NUMBER}
          max={INPUT_LIMIT_NUMBER}
        />
      ))}
    </Stack>
  );
};
