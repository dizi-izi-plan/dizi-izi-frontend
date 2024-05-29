import { useMemo } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { useAppSelector } from '@/redux/hooks';
import { selectFieldOnFocus } from '@/redux/slices/focusedFields-slice';
import {
  WALLS,
  DOOR_NAMES,
  SIDE,
  OPEN,
  STEP2,
} from '@/components/Forms/SizesForm/formData';
import { SizesFormType } from '@/components/Forms/SizesForm/validation';
import { TDoor } from '../MeasurementsTypes';
import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm/types';

export const useDoorFields = (control: Control<SizesFormType>): TDoor => {
  const fieldOnFocus = useAppSelector(selectFieldOnFocus);

  const wallNumber = useWatch({
    control,
    name: DOOR_NAMES.wallNumber,
  });
  const doorSize = Number(
    useWatch({
      control,
      name: DOOR_NAMES.size,
    }),
  );
  const distanceToWall = Number(
    useWatch({
      control,
      name: DOOR_NAMES.distanceToWall,
    }),
  );
  const toWall = useWatch({
    control,
    name: DOOR_NAMES.toWall,
  });
  const openLeftRight = useWatch({
    control,
    name: DOOR_NAMES.side,
  });
  const openInsideOutside = useWatch({
    control,
    name: DOOR_NAMES.open,
  });

  const distanceFromLeft =
    (wallNumber === WALLS.first && toWall === WALLS.forth) ||
    (wallNumber === WALLS.second && toWall === WALLS.first) ||
    (wallNumber === WALLS.third && toWall === WALLS.second) ||
    (wallNumber === WALLS.forth && toWall === WALLS.third);

  const distanceFromRight =
    (wallNumber === WALLS.first && toWall === WALLS.second) ||
    (wallNumber === WALLS.second && toWall === WALLS.third) ||
    (wallNumber === WALLS.third && toWall === WALLS.forth) ||
    (wallNumber === WALLS.forth && toWall === WALLS.first);

  const isFocused = useMemo(() => {
    if (fieldOnFocus === STEP2.doorSize.name) return true;
    return false;
  }, [fieldOnFocus]);

  return {
    wall: wallNumber as WALLS_NAMES_TYPE,
    size: doorSize,
    distance: distanceToWall,
    distanceFromLeft: distanceFromLeft,
    distanceFromRight: distanceFromRight,
    openInside: openInsideOutside === OPEN.inside,
    openLeft: openLeftRight === SIDE.left,
    isFocused: isFocused,
  };
};
