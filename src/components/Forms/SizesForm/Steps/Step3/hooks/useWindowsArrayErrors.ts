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
  const touchedWindows = touchedFields.windows?.windows;
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [isStepValid, setIsStepValid] = useState(false);

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
          Number(doorSize) < MIN_DOOR_SIZE ||
          Number(doorSize) > MAX_DOOR_SIZE;

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

  const checkWindowTypeData = useCallback(
    (windows: ElementType[]) => {
      const newErrors: ErrorType[] = [];

      windows.map((win, index) => {
        if (Object.values(win).every((item) => !item)) {
          setIsStepValid(false);
        }

        if (
          !touchedWindows ||
          !touchedWindows[index] ||
          touchedWindows.every((item) => item === undefined)
        ) {
          return;
        }

        const sizeError = touchedWindows[index].size
          ? checkWindowSize(win, index)
          : undefined;
        const distanceToWallError = checkDistanceToWall(
          // @ts-expect-error
          fields,
          win,
          `windows.windows.${index}`,
        );

        const doorSizeError = touchedWindows[index].doorSize
          ? checkDoorSize(win, index)
          : undefined;
        const toWallError = checkToWall(win, index);

        if (doorSizeError) newErrors.push(doorSizeError);
        if (sizeError) newErrors.push(sizeError);
        if (distanceToWallError) newErrors.push(distanceToWallError);
        if (toWallError) newErrors.push(toWallError);

        setErrors(newErrors);
      });
    },
    [touchedWindows],
  );

  useEffect(() => {
    if (fields.windows?.type === 'noWindow') {
      setIsStepValid(true);
      return;
    }

    if (fields.windows?.type === 'window' && fields?.windows?.windows) {
      if (fields?.windows?.windows?.length === 0) {
        setIsStepValid(false);
        return;
      } else {
        checkWindowTypeData(fields.windows.windows);
      }
    }
  }, [fields, touchedFields, checkWindowTypeData]);

  const checkFieldForError = useCallback(
    (err: ErrorType) => {
      const { code, message, path } = err;
      const errorPath = path.join('.') as WALLS_NAMES_TYPE;

      if (!message) {
        clearErrors(errorPath);
        return true;
      }

      setError(errorPath, { message, type: code });
      return false;
    },
    [clearErrors, setError],
  );

  useEffect(() => {
    if (errors.length === 0) {
      clearErrors('windows.windows');
      return;
    }

    let isAllFieldsValid: boolean[] = [];

    errors.map((err) => {
      if (!err) return;

      const res = checkFieldForError(err);
      isAllFieldsValid.push(res);
    });

    if (isAllFieldsValid.every((el) => el)) {
      setIsStepValid(true);
      setErrors([]);
    } else {
      setIsStepValid(false);
    }
  }, [errors, checkFieldForError, setErrors]);

  return { isStepValid };
};
