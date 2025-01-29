import { useMemo } from 'react';
import { Control, useWatch, useFormState } from 'react-hook-form';
import { useAppSelector } from '@/redux/hooks';
import { selectFieldOnFocus } from '@/redux/slices/focusedFields-slice';

import { TDoor } from '../ui';
import {
  WALLS,
  WALLS_NAMES_TYPE,
} from '@/components/Forms/SizesForm/Steps/Step1/utils/consts/consts';
import { STEP2 } from '@/components/Forms/SizesForm/Steps/Step2';
import { OPEN, SIDE } from '@/components/Forms/SizesForm/utils/consts/consts';
import { SizesFormType } from '@/components/Forms/SizesForm';

export const useDoorFields = (
  control: Control<SizesFormType>,
  isInvisible: boolean,
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
    size: errors.door?.size || isInvisible ? 0 : Number(doorForm?.size),
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
