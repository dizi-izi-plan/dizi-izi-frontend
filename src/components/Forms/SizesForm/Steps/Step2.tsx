import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { Stack } from '@mui/material';
import {
  ERROR_MESSAGES,
  MAX_DOOR_INPUT_LENGTH,
  MAX_WALLS_INPUT_LENGTH,
  MIN_DOOR_DISTANCE_TO_WALL,
  SizesFormType,
} from '../validation';
import { WALLS_NAMES_TYPE, WALL_NUM } from '../types';
import { NEIGHBOR_WALLS, STEP2 } from '../formData';
import { SelectWrapper } from '@/components/Input/SelectWrapper';
import {
  RadioGroupWrapper,
  RadioType,
} from '@/components/Input/RadioGroup/RadioGroupWrapper';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

export const Door = () => {
  const { control, formState, watch, getValues, setError } =
    useFormContext<SizesFormType>();
  const { errors } = formState;

  const toWallRadios = (): RadioType[] => {
    const selectedWall = watch(STEP2.wallNumber.name as WALLS_NAMES_TYPE);

    if (selectedWall) {
      return NEIGHBOR_WALLS[selectedWall as keyof typeof NEIGHBOR_WALLS];
    }
    return [];
  };

  const checkDistanceToWall = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    if (getValues) {
      const form = getValues();
      const wallNum = form.door.wallNumber.split('.')[1] as WALL_NUM;
      const wallLength = form.walls[wallNum];
      const doorSize = form.door.size;
      const restLength =
        Number(wallLength) -
        Number(doorSize) -
        Number(value) -
        MIN_DOOR_DISTANCE_TO_WALL;

      if (restLength < 0 && setError) {
        setError('door.distanceToWall', {
          message: ERROR_MESSAGES.maxDistanceToWall,
        });
      }
    }
  };

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
        errorMessage={
          (errors && errors?.door && errors?.door?.size?.message) || ''
        }
      />
      <Stack direction="row" gap={3}>
        <TextFieldWrapper
          name={`${STEP2.fromDoorTo.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          placeholder={STEP2.fromDoorTo.placeholder}
          type="number"
          step={1}
          onChangeHandler={checkDistanceToWall}
          max={MAX_WALLS_INPUT_LENGTH}
          errorMessage={
            (errors && errors?.door && errors?.door?.distanceToWall?.message) ||
            ''
          }
        />
        <RadioGroupWrapper
          name={`${STEP2.toWall.name}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_LABEL.end}
          radios={toWallRadios()}
          labelSx={{
            marginRight: 0,
          }}
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
