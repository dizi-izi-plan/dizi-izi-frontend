import { useMemo } from 'react';
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
  MAX_WALLS_INPUT_LENGTH,
  MAX_WINDOW_INPUT_LENGTH,
} from '../../validation';
import { STEP3 } from '../../formData';
import { SizesFormType } from '../../types';

export const Window = ({
  index,
  handleRemove,
}: {
  index: number;
  handleRemove: (index: number) => void;
}) => {
  const { control, formState, watch } = useFormContext<SizesFormType>();
  const { errors } = formState;

  const selectedWall = watch(
    `windows.windows.${index}.${STEP3.wallNumber.name}`,
  );

  const toWallRadios = useToWallRadios(selectedWall);

  const options = useMemo(() => {
    const doorWallNumber = watch('door.wallNumber');
    return STEP3.wallNumber.options.filter(
      (option) => option.value !== doorWallNumber,
    );
  }, [watch('door.wallNumber')]);

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
      <Stack gap={3}>
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
          errorMessage={errors?.windows?.windows?.[index]?.size?.message || ''}
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
          {errors?.windows?.windows?.[index]?.distanceToWall && (
            <FormHelperText>
              {errors?.windows?.windows?.[index]?.distanceToWall.message}
            </FormHelperText>
          )}
          {errors?.windows?.windows?.[index]?.toWall && (
            <FormHelperText>
              {errors?.windows?.windows?.[index]?.toWall.message}
            </FormHelperText>
          )}
        </Stack>
      </Stack>
    </>
  );
};
