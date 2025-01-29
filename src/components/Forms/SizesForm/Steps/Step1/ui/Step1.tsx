import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import {
  CLASS_NAMES_HELPER,
  CLASS_NAMES_INPUT,
} from '@/components/Input/classNameConstants';
import { FormHelperText, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addBedroomFocusedField,
  deleteBedroomFocusedField,
} from '@/redux/slices/focusedFields-slice';
import { selectIsStepValid } from '@/redux/slices/current-slice';
import {
  ALLOWED_KEYS,
  CORRESPONDING_WALLS,
  MAX_WALLS_INPUT_LENGTH,
  MIN_WALLS_INPUT_LENGTH,
  STEP1,
  WALLS_NAMES_TYPE,
} from '../utils/consts/consts';
import { ERROR_MESSAGES, SizesFormType } from '../../..';

export const Walls = () => {
  const dispatch = useAppDispatch();
  const {
    setValue,
    control,
    formState: { touchedFields },
  } = useFormContext<SizesFormType>();
  const isStepValid = useAppSelector(selectIsStepValid);

  const getCorrespondingWall = (name: string): WALLS_NAMES_TYPE => {
    return CORRESPONDING_WALLS[name as WALLS_NAMES_TYPE];
  };

  const setCorrespondingWallValue = (name: string, newValue: string) => {
    const correspondingWall = getCorrespondingWall(name);
    setValue(correspondingWall, newValue, {
      shouldValidate: true,
    });
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    if (value.length <= MAX_WALLS_INPUT_LENGTH) {
      setCorrespondingWallValue(name, value);
    }
  };

  return (
    <Stack gap={3}>
      {STEP1.map((field, ind) => (
        <TextFieldWrapper
          key={ind}
          name={`${field.number}` as keyof SizesFormType}
          control={control}
          className={CLASS_NAMES_INPUT.grey}
          onChangeHandler={onChange}
          placeholder={field.placeholder}
          type="number"
          step={1}
          min={MIN_WALLS_INPUT_LENGTH}
          max={MAX_WALLS_INPUT_LENGTH}
          onFocus={() => dispatch(addBedroomFocusedField(field.number))}
          onBlurHandler={() => dispatch(deleteBedroomFocusedField())}
          onKeyDown={(e) => {
            if (
              !'0123456789'.includes(e.key) &&
              !ALLOWED_KEYS.has(e.key) &&
              !((e.ctrlKey || e.altKey) && e.key !== 'v')
            ) {
              e.preventDefault();
            }
          }}
        />
      ))}
      {touchedFields.walls && !isStepValid && (
        <FormHelperText className={CLASS_NAMES_HELPER.centered}>
          {ERROR_MESSAGES.minWallsSizes}
        </FormHelperText>
      )}
    </Stack>
  );
};
