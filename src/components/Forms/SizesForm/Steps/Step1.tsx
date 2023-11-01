import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { CLASS_NAMES_INPUT } from '@/components/Input/classNameConstants';
import { selectWalls } from '@/redux/selectors/selector';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { STEP1 } from './formStepsNames';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import {
  defaultWallsValues,
  setWallsValues,
} from '@/redux/slices/measurements-slice';

export const Walls = () => {
  const walls = useSelector(selectWalls);
  const dispatch = useAppDispatch();

  const {
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: { ...walls },
  });

  const onFocus = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (
      target.value ===
      defaultWallsValues[target.name as keyof typeof defaultWallsValues]
    )
      setValue(target.name, '');
  };

  const getCorrespondWall = (name: keyof typeof defaultWallsValues): string => {
    const correspondWalls = {
      firstWall: 'thirdWall',
      secondWall: 'forthWall',
      thirdWall: 'firstWall',
      forthWall: 'secondWall',
    };
    return correspondWalls[name];
  };

  const setCorrespondWallValue = (
    name: keyof typeof defaultWallsValues,
    newValue: string,
  ) => {
    const correspondWall = getCorrespondWall(name);
    setValue(correspondWall, newValue);
  };

  const checkCorrespondWallValue = (
    name: keyof typeof defaultWallsValues,
  ): string | undefined => {
    const correspondWall = getCorrespondWall(
      name,
    ) as keyof typeof defaultWallsValues;
    const value = getValues(correspondWall);
    if (value === defaultWallsValues[correspondWall]) return;
    return value;
  };

  const setNewFieldValue = (
    name: keyof typeof defaultWallsValues,
    value: string,
  ): void => {
    let newValue;
    if (value) {
      newValue = value;
      setCorrespondWallValue(name, newValue);
    } else {
      const correspondWallValue = checkCorrespondWallValue(name);
      newValue = correspondWallValue
        ? correspondWallValue
        : defaultWallsValues[name as keyof typeof defaultWallsValues];
    }
    setValue(name, newValue);
  };

  const onBlur = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setNewFieldValue(
      target.name as keyof typeof defaultWallsValues,
      target.value,
    );
    dispatch(setWallsValues({ walls: { ...getValues() } }));
  };

  return (
    <form>
      <Stack gap={3}>
        {STEP1.map((field, ind) => (
          <TextFieldWrapper
            key={ind}
            name={field.name}
            control={control}
            className={CLASS_NAMES_INPUT.grey}
            errorMessage={''}
            placeholder={field.placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </Stack>
    </form>
  );
};
