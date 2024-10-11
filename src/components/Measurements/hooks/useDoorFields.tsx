import { useMemo } from 'react';
import { Control, useWatch, useFormState } from 'react-hook-form';
import { useAppSelector } from '@/redux/hooks';
import { selectFieldOnFocus } from '@/redux/slices/focusedFields-slice';
import {
  WALLS,
  SIDE,
  OPEN,
  STEP2,
} from '@/components/Forms/SizesForm/formData';
import { SizesFormType } from '@/components/Forms/SizesForm/validation';
import { TDoor } from '../MeasurementsTypes';
import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm/types';

export const useDoorFields = (
  control: Control<SizesFormType>,
  invisible: boolean,
): TDoor => {
  const fieldOnFocus = useAppSelector(selectFieldOnFocus);

  const { errors } = useFormState({
    control,
  });

  const doorForm = useWatch({
    control,
  }).door;

  const distanceFromLeft =
    (doorForm?.wallNumber === WALLS.first &&
      doorForm?.toWall === WALLS.forth) ||
    (doorForm?.wallNumber === WALLS.second &&
      doorForm?.toWall === WALLS.first) ||
    (doorForm?.wallNumber === WALLS.third &&
      doorForm?.toWall === WALLS.second) ||
    (doorForm?.wallNumber === WALLS.forth && doorForm?.toWall === WALLS.third);

  const distanceFromRight =
    (doorForm?.wallNumber === WALLS.first &&
      doorForm?.toWall === WALLS.second) ||
    (doorForm?.wallNumber === WALLS.second &&
      doorForm?.toWall === WALLS.third) ||
    (doorForm?.wallNumber === WALLS.third &&
      doorForm?.toWall === WALLS.forth) ||
    (doorForm?.wallNumber === WALLS.forth && doorForm?.toWall === WALLS.first);

  const isFocused = useMemo(() => {
    if (fieldOnFocus === STEP2.doorSize.name) return true;
    return false;
  }, [fieldOnFocus]);

  return {
    wall: doorForm?.wallNumber as WALLS_NAMES_TYPE,
    size: errors.door?.size || invisible ? 0 : Number(doorForm?.size),
    distance: errors.door?.distanceToWall
      ? 0
      : Number(doorForm?.distanceToWall),
    distanceFromLeft: distanceFromLeft,
    distanceFromRight: distanceFromRight,
    openInside: doorForm?.open === OPEN.inside,
    openLeft: doorForm?.side === SIDE.left,
    isFocused: isFocused,
  };
};
