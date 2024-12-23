import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { FormHelperText, Stack } from '@mui/material';
import { MAX_DOOR_INPUT_LENGTH, MAX_WALLS_INPUT_LENGTH } from '../validation';
import { STEP2 } from '../formData';
import { SelectWrapper } from '@/components/Input/SelectWrapper';
import { RadioGroupWrapper } from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { useToWallRadios } from '@/hooks/useToWallRadios';
import { useFocusedObject } from '@/hooks/useFocusedObject';
import { SizesFormType } from '../types';
import { WALLS } from '../formData';

export const Door = () => {
  const { handleSetFocused, handleSetHovered } = useFocusedObject(
    STEP2.doorSize.name,
  );
  const { control, formState, watch, setValue } =
    useFormContext<SizesFormType>();
  const { errors, touchedFields } = formState;

  const selectedWall = watch(STEP2.wallNumber.name);

  const toWallRadios = useToWallRadios(selectedWall);

  useEffect(() => {
    if (selectedWall === WALLS.first || selectedWall === WALLS.third)
      setValue(STEP2.toWall.name, WALLS.second, {
        shouldValidate: true,
      });
    if (selectedWall === WALLS.second || selectedWall === WALLS.forth)
      setValue(STEP2.toWall.name, WALLS.first, {
        shouldValidate: true,
      });
  }, [selectedWall, setValue]);

  return (
    <Stack gap={3}>
      <SelectWrapper
        name={STEP2.wallNumber.name as keyof SizesFormType}
        control={control}
        labelText={STEP2.wallNumber.placeholder}
        options={STEP2.wallNumber.options}
        className={CLASS_NAMES_INPUT.grey}
      />
      <Stack
        onMouseEnter={() => handleSetHovered(true)}
        onMouseLeave={() => handleSetHovered(false)}
      >
        <TextFieldWrapper
          name={`${STEP2.doorSize.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          placeholder={STEP2.doorSize.placeholder}
          type="number"
          step={1}
          max={MAX_DOOR_INPUT_LENGTH}
          errorMessage={
            (touchedFields.door?.size && errors?.door?.size?.message) || ''
          }
          onFocus={() => handleSetFocused(true)}
          onBlurHandler={() => handleSetFocused(false)}
        />
        <Stack direction="row" gap={3} mt={3}>
          <TextFieldWrapper
            name={`${STEP2.fromDoorTo.name}` as keyof SizesFormType}
            control={control}
            className={CLASS_NAMES_INPUT.grey}
            placeholder={STEP2.fromDoorTo.placeholder}
            type="number"
            step={1}
            max={MAX_WALLS_INPUT_LENGTH}
            onFocus={() => handleSetFocused(true)}
            onBlurHandler={() => handleSetFocused(false)}
          />
          <RadioGroupWrapper
            name={`${STEP2.toWall.name}` as keyof SizesFormType}
            control={control}
            className={CLASS_NAMES_LABEL.end}
            radios={toWallRadios}
            labelSx={{
              marginRight: 0,
            }}
          />
        </Stack>
        {touchedFields.door?.distanceToWall && errors.door?.distanceToWall && (
          <FormHelperText>{errors.door.distanceToWall.message}</FormHelperText>
        )}
      </Stack>
      <Stack>
        <RadioGroupWrapper
          name={`${STEP2.openLeftRight.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_LABEL.end}
          radios={STEP2.openLeftRight.radios}
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
        <RadioGroupWrapper
          name={`${STEP2.openInsideOutside.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_LABEL.end}
          radios={STEP2.openInsideOutside.radios}
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
    </Stack>
  );
};
