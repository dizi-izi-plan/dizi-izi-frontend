import { useCallback, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import {
  MIN_WINDOW_SIZE,
  MIN_WINDOW_WITH_BALCONY_SIZE,
} from '../../../validation';
import { SizesFormType, WALLS_NAMES_TYPE } from '../../../types';
import { ERROR_MESSAGES } from '../../utils/consts';
import { checkDistanceToWall } from '../../utils/helpers';

type ElementType = {
  distanceToWall?: string;
  wallNumber?: string;
  size?: string;
  doorSize?: string;
};

type ErrorType = {
  code: string;
  message: string;
  path: (string | number)[];
};

export const useWindowsArrayErrors = () => {
  const { setError, clearErrors } = useFormContext<SizesFormType>();
  const fields = useWatch<SizesFormType>();
  const [errors, setErrors] = useState<ErrorType[]>([]);

  const checkWindowSize = useCallback(
    (element: ElementType, index: number): ErrorType | undefined => {
      let message = '';
      //@ts-expect-error
      const { wallLength, elementSize } = getSizes(fields, element);

      if (
        'doorSize' in element &&
        Number(elementSize) < MIN_WINDOW_WITH_BALCONY_SIZE
      ) {
        message = ERROR_MESSAGES.minWindowWithBalconySize;
      }

      if (Number(elementSize) < MIN_WINDOW_SIZE) {
        message = ERROR_MESSAGES.minWindowSize;
      }

      if (Number(elementSize) > Number(wallLength)) {
        message = ERROR_MESSAGES.maxWindowSize;
      }

      return {
        message,
        code: 'custom',
        path: ['windows', 'windows', `${index}`, 'size'],
      };
    },
    [fields],
  );

  useEffect(() => {
    if (fields?.windows?.windows && fields.windows.windows?.length > 0) {
      const newErrors: ErrorType[] = [];

      fields.windows.windows.map((win, index) => {
        const sizeError = checkWindowSize(win, index);
        const distanceToWallError = checkDistanceToWall(
          // @ts-expect-error
          fields,
          win,
          `windows.windows.${index}`,
        );

        if (sizeError) newErrors.push(sizeError);
        if (distanceToWallError) newErrors.push(distanceToWallError);

        setErrors(newErrors);
      });
    }
  }, [fields]);

  useEffect(() => {
    if (errors.length === 0) {
      clearErrors('windows.windows');
      return;
    }

    errors.map((err) => {
      if (!err) return;

      const { code, message, path } = err;
      const errorPath = path.join('.') as WALLS_NAMES_TYPE;

      if (!message) {
        clearErrors(errorPath);
        return;
      }

      setError(errorPath, { message, type: code });
    });
  }, [errors, setError, clearErrors]);
};
