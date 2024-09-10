import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { SelectWrapper } from '@/components/Input/SelectWrapper';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { FormHelperText, Stack, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import {
  MAX_WALLS_INPUT_LENGTH,
  MAX_WINDOW_INPUT_LENGTH,
  SizesFormType,
} from '../../validation';
import { STEP3 } from '../../formData';
import { useToWallRadios } from '@/hooks/useToWallRadios';

export const Window = ({ index }: { index: number }) => {
  const { control, formState, watch } = useFormContext<SizesFormType>();
  const { errors } = formState;

  const selectedWall = watch(
    `windows.windows.${index}.${STEP3.wallNumber.name}`,
  );

  const toWallRadios = useToWallRadios(selectedWall);

  return (
    <>
      <Typography variant="body1" color="second.main">
        Окно
      </Typography>
      <Stack gap={3}>
        <SelectWrapper
          name={`windows.windows.${index}.${STEP3.wallNumber.name}`}
          control={control}
          labelText={STEP3.wallNumber.placeholder}
          options={STEP3.wallNumber.options}
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
          errorMessage={errors?.door?.size?.message || ''}
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
          {errors.door?.distanceToWall && (
            <FormHelperText>
              {errors.door.distanceToWall.message}
            </FormHelperText>
          )}
        </Stack>
      </Stack>
    </>
  );
};
