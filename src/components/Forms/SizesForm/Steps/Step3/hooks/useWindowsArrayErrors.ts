import { useCallback, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { SizesFormType } from '../../../types';
import { checkWindow, checkWindowsOfSameWall } from '../../utils/helpers';

export const useWindowsArrayErrors = () => {
  const { setError, clearErrors, formState } = useFormContext<SizesFormType>();
  const fields = useWatch<SizesFormType>();
  const [isStepValid, setIsStepValid] = useState(false);

  const checkWindowTypeData = useCallback(() => {
    if (fields?.windows?.windows && fields?.windows?.windows?.length > 1) {
      // @ts-expect-error fields with undefined values are covered in useEffect
      checkWindowsOfSameWall(fields, setError, clearErrors);
    }

    fields?.windows?.windows?.forEach((win, index) => {
      checkWindow(
        // @ts-expect-error fields with undefined values are covered in useEffect
        fields,
        win,
        `windows.windows.${index}`,
        setError,
        clearErrors,
      );
    });
  }, [fields, clearErrors, setError]);

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
  }, [setIsStepValid, checkWindowTypeData, fields.windows]);

  useEffect(() => {
    if (!formState.errors.windows) {
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  }, [formState.errors.windows]);

  return { isStepValid };
};
