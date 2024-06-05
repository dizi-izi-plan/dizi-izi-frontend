import { useMemo } from 'react';
import { Control, useWatch, useFormState } from 'react-hook-form';
import { useAppSelector } from '@/redux/hooks';
import { selectFieldOnFocus } from '@/redux/slices/focusedFields-slice';
import { WALLS } from '@/components/Forms/SizesForm/formData';
import { SizesFormType } from '@/components/Forms/SizesForm/validation';

type TWalls = {
  verticalWall: number;
  verticalFocus: boolean;
  horizontalWall: number;
  horizontalFocus: boolean;
};

export const useWallsFields = (control: Control<SizesFormType>): TWalls => {
  const fieldOnFocus = useAppSelector(selectFieldOnFocus);

  const { errors } = useFormState({
    control,
  });

  const wallsForm = useWatch({
    control,
  }).walls;

  const horizontalFocus = useMemo(() => {
    if (fieldOnFocus === WALLS.second || fieldOnFocus === WALLS.forth)
      return true;
    return false;
  }, [fieldOnFocus]);

  const verticalFocus = useMemo(() => {
    if (fieldOnFocus === WALLS.first || fieldOnFocus === WALLS.third)
      return true;
    return false;
  }, [fieldOnFocus]);

  return {
    verticalWall:
      errors.walls?.first || errors.walls?.third ? 0 : Number(wallsForm?.first),
    verticalFocus: verticalFocus,
    horizontalWall:
      errors.walls?.second || errors.walls?.forth
        ? 0
        : Number(wallsForm?.second),
    horizontalFocus: horizontalFocus,
  };
};
