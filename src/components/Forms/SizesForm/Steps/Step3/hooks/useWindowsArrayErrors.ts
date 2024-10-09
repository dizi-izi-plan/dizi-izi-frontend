import { useCallback, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import {
  MAX_DOOR_SIZE,
  MIN_DOOR_SIZE,
  MIN_WINDOW_SIZE,
  MIN_WINDOW_WITH_BALCONY_SIZE,
} from '../../../validation';
import { SizesFormType, WALLS_NAMES_TYPE } from '../../../types';
import { ERROR_MESSAGES } from '../../utils/consts';
import { checkDistanceToWall, getSizes } from '../../utils/helpers';

type ElementType = {
  distanceToWall?: string;
  wallNumber?: string;
  size?: string;
  doorSize?: string;
  toWall?: string;
};

type ErrorType = {
  code: string;
  message: string;
  path: (string | number)[];
};

export const useWindowsArrayErrors = () => {
  const { setError, clearErrors, formState } = useFormContext<SizesFormType>();
  const fields = useWatch<SizesFormType>();
  const { touchedFields } = formState;
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

  const checkDoorSize = useCallback(
    (element: ElementType, index: number): ErrorType | undefined => {
      let message = '';

      if ('doorSize' in element) {
        const doorSize = element.doorSize;
        const isDoorInValid =
          !doorSize ||
          (Number(doorSize) >= MIN_DOOR_SIZE &&
            Number(doorSize) <= MAX_DOOR_SIZE);

        if (isDoorInValid) message = ERROR_MESSAGES.doorSizes;
      }

      return {
        message,
        code: 'custom',
        path: ['windows', 'windows', `${index}`, 'doorSize'],
      };
    },
    [],
  );

  const checkToWall = useCallback(
    (element: ElementType, index: number): ErrorType | undefined => {
      let message = '';

      if (!element.toWall) message = ERROR_MESSAGES.toWallRequired;

      return {
        message,
        code: 'custom',
        path: ['windows', 'windows', `${index}`, 'toWall'],
      };
    },
    [],
  );

  useEffect(() => {
    if (fields?.windows?.windows && fields.windows.windows?.length > 0) {
      const newErrors: ErrorType[] = [];

      console.log('touchedFields', touchedFields);

      fields.windows.windows.map((win, index) => {
        if (
          !touchedFields.windows?.windows ||
          !touchedFields.windows?.windows[index] ||
          touchedFields.windows.windows.every((item) => item === undefined)
        ) {
          return;
        }

        const sizeError = touchedFields.windows?.windows[index].size
          ? checkWindowSize(win, index)
          : undefined;
        const distanceToWallError = touchedFields.windows?.windows[index]
          .distanceToWall
          ? checkDistanceToWall(
              // @ts-expect-error
              fields,
              win,
              `windows.windows.${index}`,
            )
          : undefined;
        const doorSizeError = touchedFields.windows?.windows[index].doorSize
          ? checkDoorSize(win, index)
          : undefined;
        const toWallError = touchedFields.windows?.windows[index].distanceToWall
          ? checkToWall(win, index)
          : undefined;

        if (doorSizeError) newErrors.push(doorSizeError);
        if (sizeError) newErrors.push(sizeError);
        if (distanceToWallError) newErrors.push(distanceToWallError);
        if (toWallError) newErrors.push(toWallError);

        setErrors(newErrors);
      });
    }
  }, [fields, touchedFields]);

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
