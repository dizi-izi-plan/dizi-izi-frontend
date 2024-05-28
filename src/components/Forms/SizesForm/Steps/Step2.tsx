import { useAppDispatch } from '@/redux/hooks';
import {
  addBedroomFocusedField,
  deleteBedroomFocusedField,
} from '@/redux/slices/focusedFields-slice';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { FormHelperText, Stack } from '@mui/material';
import {
  MAX_DOOR_INPUT_LENGTH,
  MAX_WALLS_INPUT_LENGTH,
  SizesFormType,
} from '../validation';
import { STEP2 } from '../formData';
import { SelectWrapper } from '@/components/Input/SelectWrapper';
import {
  RadioGroupWrapper,
  RadioType,
} from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { useFormContext } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { WALLS_NAMES_TYPE } from '../types';
import { WALLS } from '../formData';

const TO_WALL_RADIOS_EVEN: RadioType[] = [
  {
    label: 'До стены 2',
    value: WALLS.second,
  },
  { label: 'До стены 4', value: WALLS.forth },
];

const TO_WALL_RADIOS_UNEVEN: RadioType[] = [
  { label: 'До стены 1', value: WALLS.first },
  {
    label: 'До стены 3',
    value: WALLS.third,
  },
];

export const Door = () => {
  const dispatch = useAppDispatch();

  const { control, formState, watch, setValue } =
    useFormContext<SizesFormType>();
  const { errors } = formState;
  const selectedWall = watch(STEP2.wallNumber.name as WALLS_NAMES_TYPE);

  const toWallRadios = useMemo((): RadioType[] => {
    if (selectedWall === WALLS.first || selectedWall === WALLS.third) {
      return TO_WALL_RADIOS_EVEN;
    }
    return TO_WALL_RADIOS_UNEVEN;
  }, [selectedWall]);

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
      <TextFieldWrapper
        name={`${STEP2.doorSize.name}` as keyof SizesFormType}
        control={control}
        className={CLASS_NAMES_INPUT.grey}
        placeholder={STEP2.doorSize.placeholder}
        type="number"
        step={1}
        max={MAX_DOOR_INPUT_LENGTH}
        errorMessage={errors?.door?.size?.message || ''}
        onFocus={() => dispatch(addBedroomFocusedField(STEP2.doorSize.name))}
        onBlur={() => dispatch(deleteBedroomFocusedField())}
      />
      <Stack>
        <Stack
          direction="row"
          gap={3}
          onFocus={() =>
            dispatch(addBedroomFocusedField(STEP2.fromDoorTo.name))
          }
          onBlur={() => dispatch(deleteBedroomFocusedField())}
        >
          <TextFieldWrapper
            name={`${STEP2.fromDoorTo.name}` as keyof SizesFormType}
            control={control}
            className={CLASS_NAMES_INPUT.grey}
            placeholder={STEP2.fromDoorTo.placeholder}
            type="number"
            step={1}
            max={MAX_WALLS_INPUT_LENGTH}
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
        {errors.door?.distanceToWall && (
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
