import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { Stack } from '@mui/material';
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
import { useMemo } from 'react';
import { WALLS_NAMES_TYPE } from '../types';

const TO_WALL_RADIOS_EVEN: RadioType[] = [
  {
    label: 'До стены 2',
    value: '2',
  },
  { label: 'До стены 4', value: '4' },
];

const TO_WALL_RADIOS_UNEVEN: RadioType[] = [
  { label: 'До стены 1', value: '1' },
  {
    label: 'До стены 3',
    value: '3',
  },
];

export const Door = () => {
  const { control, formState, watch } = useFormContext<SizesFormType>();
  const { errors } = formState;

  const toWallRadios = useMemo((): RadioType[] => {
    const selectedWall = watch(STEP2.wallNumber.name as WALLS_NAMES_TYPE);

    if (selectedWall === 'walls.first' || selectedWall === 'walls.third') {
      return TO_WALL_RADIOS_EVEN;
    }
    return TO_WALL_RADIOS_UNEVEN;
  }, [watch]);

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
      />
      <Stack direction="row" gap={3}>
        <TextFieldWrapper
          name={`${STEP2.fromDoorTo.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          placeholder={STEP2.fromDoorTo.placeholder}
          type="number"
          step={1}
          max={MAX_WALLS_INPUT_LENGTH}
          errorMessage={errors?.door?.distanceToWall?.message || ''}
        />
        <RadioGroupWrapper
          name={`${STEP2.toWall.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_LABEL.end}
          radios={toWallRadios}
          labelSx={{
            marginRight: 0,
          }}
          errorMessage={errors?.door?.toWall?.message || ''}
        />
      </Stack>
      <Stack mt={8}>
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
