'use client';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import ClearIcon from '@mui/icons-material/Clear';
import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { SelectWrapper } from '@/components/Input/SelectWrapper';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { Button, FormHelperText, Stack, Typography } from '@mui/material';
import { useToWallRadios } from '@/hooks/useToWallRadios';
import { useFocusedObject } from '@/hooks/useFocusedObject';
import {
  MAX_WALLS_INPUT_LENGTH,
  MAX_WINDOW_INPUT_LENGTH,
} from '../../validation';
import { STEP3, WALLS } from '../../formData';
import { SizesFormType } from '../../types';

type WindowProps = {
  index: number;
  handleRemove: (index: number) => void;
};

export const Window = ({ index, handleRemove }: WindowProps) => {
  const {
    control,
    formState: { errors, touchedFields },
    watch,
    setValue,
  } = useFormContext<SizesFormType>();
  const { handleSetFocused, handleSetHovered } = useFocusedObject(
    `windows.windows.${index}.${STEP3.windowSize.name}`,
  );
  const selectedWall = watch(
    `windows.windows.${index}.${STEP3.wallNumber.name}`,
  );

  const toWallRadios = useToWallRadios(selectedWall);

  useEffect(() => {
    if (selectedWall === WALLS.first || selectedWall === WALLS.third)
      setValue(`windows.windows.${index}.${STEP3.toWall.name}`, WALLS.second, {
        shouldValidate: true,
      });
    if (selectedWall === WALLS.second || selectedWall === WALLS.forth)
      setValue(`windows.windows.${index}.${STEP3.toWall.name}`, WALLS.first, {
        shouldValidate: true,
      });
  }, [selectedWall, setValue, index]);

  const options = useMemo(() => {
    const doorWallNumber = watch('door.wallNumber');
    return STEP3.wallNumber.options.filter(
      (option) => option.value !== doorWallNumber,
    );
  }, [watch]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1" color="second.main">
          Окно {index + 1}
        </Typography>
        <Button variant="empty" onClick={() => handleRemove(index)}>
          <ClearIcon />
        </Button>
      </Stack>
      <Stack
        gap={3}
        onMouseEnter={() => handleSetHovered(true)}
        onMouseLeave={() => handleSetHovered(false)}
      >
        <SelectWrapper
          name={`windows.windows.${index}.${STEP3.wallNumber.name}`}
          control={control}
          labelText={STEP3.wallNumber.placeholder}
          options={options}
          className={CLASS_NAMES_INPUT.grey}
        />
        <TextFieldWrapper
          name={`windows.windows.${index}.${STEP3.windowSize.name}`}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          placeholder={STEP3.windowSize.placeholder}
          type="number"
          step={1}
          max={MAX_WINDOW_INPUT_LENGTH}
          errorMessage={
            (touchedFields.windows?.windows?.[index]?.size &&
              errors?.windows?.windows?.[index]?.size?.message) ||
            ''
          }
          onFocus={() => handleSetFocused(true)}
          onBlurHandler={() => handleSetFocused(false)}
        />
        <Stack>
          <Stack direction="row" gap={3}>
            <TextFieldWrapper
              name={`windows.windows.${index}.${STEP3.fromWindowTo.name}`}
              control={control}
              className={CLASS_NAMES_INPUT.grey}
              placeholder={STEP3.fromWindowTo.placeholder}
              type="number"
              step={1}
              max={MAX_WALLS_INPUT_LENGTH}
              onFocus={() => handleSetFocused(true)}
              onBlurHandler={() => handleSetFocused(false)}
            />
            <RadioGroupWrapper
              name={`windows.windows.${index}.${STEP3.toWall.name}`}
              control={control}
              className={CLASS_NAMES_LABEL.end}
              radios={toWallRadios}
              labelSx={{
                marginRight: 0,
              }}
            />
          </Stack>
          {touchedFields.windows?.windows?.[index]?.distanceToWall && (
            <FormHelperText>
              {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
              {errors?.windows?.windows?.[index]?.distanceToWall?.message ?? ''}
            </FormHelperText>
          )}
          {touchedFields.windows?.windows?.[index]?.distanceToWall && (
            <FormHelperText>
              {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
              {errors?.windows?.windows?.[index]?.toWall?.message ?? ''}
            </FormHelperText>
          )}
        </Stack>
      </Stack>
    </>
  );
};
