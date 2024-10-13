import { useCallback, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { SizesFormType } from '../../../types';
import { checkWindow } from '../../utils/helpers';

export const useWindowsArrayErrors = () => {
  const { setError, clearErrors, formState } = useFormContext<SizesFormType>();
  const fields = useWatch<SizesFormType>();
  const [isStepValid, setIsStepValid] = useState(false);

  const checkWindowTypeData = useCallback(() => {
    fields?.windows?.windows?.forEach((win, index) => {
      checkWindow(
        // @ts-expect-error
        fields,
        win,
        `windows.windows.${index}`,
        setError,
        clearErrors,
      );
    });
  }, [fields, checkWindow]);

  useEffect(() => {
    if (!fields.windows) {
      return;
    }

    if (fields.windows.type === 'noWindow') {
      setIsStepValid(true);
      return;
    }

    if (fields.windows.type === 'window') {
      if (!fields.windows.windows || fields?.windows?.windows?.length === 0) {
        setIsStepValid(false);
      } else {
        checkWindowTypeData();
      }
    }
  }, [setIsStepValid, checkWindowTypeData]);

  useEffect(() => {
    if (!formState.errors.windows) {
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  }, [formState.errors.windows]);

  return { isStepValid };
};
