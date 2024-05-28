import { Control, useWatch } from 'react-hook-form';
import { SizesFormType } from '@/components/Forms/SizesForm/validation';
import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm/types';

type UseFieldValueProps = {
  control: Control<SizesFormType>;
  fieldName: WALLS_NAMES_TYPE;
  error: boolean;
};

export const useFieldValue = ({
  control,
  fieldName,
  error,
}: UseFieldValueProps) => {
  const currentFieldValue = Number(
    useWatch({
      control,
      name: fieldName,
      defaultValue: 0,
    }),
  );
  if (error) return 0;
  return currentFieldValue;
};
