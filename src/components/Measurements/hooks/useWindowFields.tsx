import { useCallback } from 'react';
import { Control, useWatch, useFormState } from 'react-hook-form';
import { useAppSelector } from '@/redux/hooks';
import { selectFieldOnFocus } from '@/redux/slices/focusedFields-slice';
import { WALLS, SIDE, STEP3 } from '@/components/Forms/SizesForm/formData';
import { TWindow } from '../MeasurementsTypes';
import {
  SizesFormType,
  WALLS_NAMES_TYPE,
} from '@/components/Forms/SizesForm/types';

export const useWindowFields = (
  control: Control<SizesFormType>,
  invisible: boolean,
): TWindow[] => {
  const fieldOnFocus = useAppSelector(selectFieldOnFocus);

  const { errors } = useFormState({
    control,
  });

  const windowForm = useWatch({
    control,
  }).windows;

  const distanceFromLeft = useCallback(
    (currentWall: WALLS_NAMES_TYPE, toWall: WALLS_NAMES_TYPE) => {
      return (
        (currentWall === WALLS.first && toWall === WALLS.forth) ||
        (currentWall === WALLS.second && toWall === WALLS.first) ||
        (currentWall === WALLS.third && toWall === WALLS.second) ||
        (currentWall === WALLS.forth && toWall === WALLS.third)
      );
    },
    [],
  );

  const distanceFromRight = useCallback(
    (currentWall: WALLS_NAMES_TYPE, toWall: WALLS_NAMES_TYPE) => {
      return (
        (currentWall === WALLS.first && toWall === WALLS.second) ||
        (currentWall === WALLS.second && toWall === WALLS.third) ||
        (currentWall === WALLS.third && toWall === WALLS.forth) ||
        (currentWall === WALLS.forth && toWall === WALLS.first)
      );
    },
    [],
  );

  const isFocused = useCallback(
    (index: number) => {
      if (fieldOnFocus === `windows.windows.${index}.${STEP3.windowSize.name}`)
        return true;
      return false;
    },
    [fieldOnFocus],
  );

  if (windowForm?.type === 'window' && windowForm?.windows) {
    return windowForm.windows
      .map((window, index) => {
        if (window.doorSize) {
          return {
            wall: window.wallNumber as WALLS_NAMES_TYPE,
            size:
              errors?.windows?.windows?.message ||
              errors.windows?.windows?.[index]?.size?.message ||
              errors.windows?.windows?.[index]?.doorSize?.message ||
              invisible
                ? 0
                : Number(window.size) + Number(window.doorSize),
            distance: errors.windows?.windows?.[index]?.distanceToWall
              ? 0
              : Number(window.distanceToWall),
            distanceFromLeft: distanceFromLeft(
              window.wallNumber as WALLS_NAMES_TYPE,
              window.toWall as WALLS_NAMES_TYPE,
            ),
            distanceFromRight: distanceFromRight(
              window.wallNumber as WALLS_NAMES_TYPE,
              window.toWall as WALLS_NAMES_TYPE,
            ),
            openLeft: window.side === SIDE.left,
            isFocused: isFocused(index),
          };
        } else {
          return {
            wall: window.wallNumber as WALLS_NAMES_TYPE,
            size:
              errors?.windows?.windows?.message ||
              errors.windows?.windows?.[index]?.size?.message ||
              invisible
                ? 0
                : Number(window.size),
            distance: errors.windows?.windows?.[index]?.distanceToWall
              ? 0
              : Number(window.distanceToWall),
            distanceFromLeft: distanceFromLeft(
              window.wallNumber as WALLS_NAMES_TYPE,
              window.toWall as WALLS_NAMES_TYPE,
            ),
            distanceFromRight: distanceFromRight(
              window.wallNumber as WALLS_NAMES_TYPE,
              window.toWall as WALLS_NAMES_TYPE,
            ),
            isFocused: isFocused(index),
          };
        }
      })
      .filter((window) => window.wall)
      .sort((a, b) => a.distance - b.distance);
  } else {
    return [];
  }
};
