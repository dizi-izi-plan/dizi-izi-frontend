'use client';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
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
import {
  addBedroomFocusedField,
  deleteBedroomFocusedField,
} from '@/redux/slices/focusedFields-slice';
import {
  MAX_DOOR_INPUT_LENGTH,
  MAX_WALLS_INPUT_LENGTH,
  MAX_WINDOW_INPUT_LENGTH,
} from '../../validation';
import { SizesFormType } from '../../types';
import { STEP3, WALLS } from '../../formData';

type WindowWithBalconyProps = {
  index: number;
  handleRemove: (index: number) => void;
};

export const WindowWithBalcony = ({
  index,
  handleRemove,
}: WindowWithBalconyProps) => {
  const {
    control,
    formState: { errors, touchedFields },
    watch,
    setValue,
  } = useFormContext<SizesFormType>();
  const dispatch = useAppDispatch();
  const [isHovered, setHovered] = useState<boolean>(false);
  const [isFocused, setFocused] = useState<boolean>(false);

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

  useEffect(() => {
    if (isHovered || isFocused) {
      dispatch(
        addBedroomFocusedField(
          `windows.windows.${index}.${STEP3.windowSize.name}`,
        ),
      );
    } else {
      dispatch(deleteBedroomFocusedField());
    }
  }, [dispatch, isHovered, isFocused, index]);

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
          Окно с балконом
        </Typography>
        <Button variant="empty" onClick={() => handleRemove(index)}>
          <ClearIcon />
        </Button>
      </Stack>
      <Stack gap={3}>
        <SelectWrapper
          name={`windows.windows.${index}.${STEP3.wallNumber.name}`}
          control={control}
          labelText={STEP3.wallNumber.placeholder}
          options={options}
          className={CLASS_NAMES_INPUT.grey}
        />
        <Stack
          gap={3}
          width="100%"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
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
            onFocus={() => setFocused(true)}
            onBlurHandler={() => setFocused(false)}
          />
          <TextFieldWrapper
            name={`windows.windows.${index}.${STEP3.doorSize.name}`}
            control={control}
            className={CLASS_NAMES_INPUT.grey}
            placeholder={STEP3.doorSize.placeholder}
            type="number"
            step={1}
            max={MAX_DOOR_INPUT_LENGTH}
            errorMessage={
              (touchedFields.windows?.windows?.[index]?.doorSize &&
                errors?.windows?.windows?.[index]?.doorSize?.message) ||
              ''
            }
            onFocus={() => setFocused(true)}
            onBlurHandler={() => setFocused(false)}
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
                onFocus={() => setFocused(true)}
                onBlurHandler={() => setFocused(false)}
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
          </Stack>
        </Stack>
        {touchedFields.windows?.windows?.[index]?.distanceToWall &&
          errors?.windows?.windows?.[index]?.distanceToWall && (
            <FormHelperText>
              {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
              {errors?.windows?.windows?.[index]?.distanceToWall?.message ?? ''}
            </FormHelperText>
          )}
        {touchedFields.windows?.windows?.[index]?.distanceToWall &&
          errors?.windows?.windows?.[index]?.toWall && (
            <FormHelperText>
              {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
              {errors?.windows?.windows?.[index]?.toWall?.message ?? ''}
            </FormHelperText>
          )}
        <RadioGroupWrapper
          name={`windows.windows.${index}.${STEP3.openLeftRight.name}`}
          control={control}
          className={CLASS_NAMES_LABEL.end}
          radios={STEP3.openLeftRight.radios}
          row={true}
          groupSx={{
            flexWrap: 'nowrap',
            gap: 2,
            marginLeft: '10px',
          }}
          labelSx={{
            flex: 1,
            marginRight: 0,
          }}
        />
      </Stack>
    </>
  );
};
