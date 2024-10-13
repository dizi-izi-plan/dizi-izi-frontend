import { z } from 'zod';
import { SizesFormType, WALL_NUM, WALLS_NAMES_TYPE } from '../../types';
import { ERROR_MESSAGES, MIN_DISTANCE_TO_WALL } from './consts';
import {
  MAX_DOOR_SIZE,
  MIN_DOOR_SIZE,
  MIN_WINDOW_SIZE,
  MIN_WINDOW_WITH_BALCONY_SIZE,
} from '../../validation';
import { UseFormClearErrors, UseFormSetError } from 'react-hook-form';

export type ElementType = {
  distanceToWall: string;
  wallNumber: string;
  size: string;
  doorSize?: string;
  toWall?: string;
};

export type ErrorType = {
  code: string;
  message: string;
  path: string[];
};

export const getSizes = (values: SizesFormType, element: ElementType) => {
  const wallNum = element.wallNumber.split('.')[1] as WALL_NUM;
  const wallLength = values.walls[wallNum];
  const elementSize = element.size;
  const distanceToWall = element.distanceToWall;

  return {
    wallLength,
    elementSize,
    distanceToWall,
  };
};

const setFieldError = (
  err: ErrorType,
  setError: UseFormSetError<SizesFormType>,
) => {
  const { code, message, path } = err;
  setError(path.join() as WALLS_NAMES_TYPE, { message, type: code });
};

export const checkDistanceToWall = <T extends ElementType>(
  values: SizesFormType,
  element: T,
  elementName: string,
  context?: z.RefinementCtx,
  setError?: UseFormSetError<SizesFormType>,
) => {
  const { wallLength, elementSize, distanceToWall } = getSizes(values, element);
  const issue = {
    code: z.ZodIssueCode.custom,
    path: [`${elementName}.distanceToWall`],
    message: '',
  };

  if (Number(distanceToWall) < MIN_DISTANCE_TO_WALL) {
    issue.message = ERROR_MESSAGES.minDistanceToWall;
    if (context) context.addIssue(issue);
    if (setError) setFieldError(issue, setError);
    return issue;
  }

  const restLength =
    Number(wallLength) -
    Number(elementSize) -
    Number(distanceToWall) -
    MIN_DISTANCE_TO_WALL;

  if (restLength < 0) {
    issue.message = ERROR_MESSAGES.maxDistanceToWall;
    if (context) context.addIssue(issue);
    if (setError) setFieldError(issue, setError);
    return issue;
  }

  return issue;
};

const checkWindowSize = <T extends ElementType>(
  values: SizesFormType,
  element: T,
  elementName: string,
  setError: UseFormSetError<SizesFormType>,
) => {
  const issue = {
    code: z.ZodIssueCode.custom,
    path: [`${elementName}.size`],
    message: '',
  };

  const { wallLength, elementSize } = getSizes(values, element);

  if (
    'doorSize' in element &&
    Number(elementSize) < MIN_WINDOW_WITH_BALCONY_SIZE
  ) {
    issue.message = ERROR_MESSAGES.minWindowWithBalconySize;
    setFieldError(issue, setError);
    return issue;
  }

  if (Number(elementSize) < MIN_WINDOW_SIZE) {
    issue.message = ERROR_MESSAGES.minWindowSize;
    setFieldError(issue, setError);
    return issue;
  }

  if (Number(elementSize) > Number(wallLength)) {
    issue.message = ERROR_MESSAGES.maxWindowSize;
    setFieldError(issue, setError);
    return issue;
  }

  return issue;
};

const checkDoorSize = <T extends ElementType>(
  element: T,
  elementName: string,
  setError: UseFormSetError<SizesFormType>,
) => {
  const issue = {
    code: z.ZodIssueCode.custom,
    path: [`${elementName}.doorSize`],
    message: '',
  };

  if ('doorSize' in element) {
    const doorSize = element.doorSize;
    const isDoorInValid =
      !doorSize ||
      Number(doorSize) < MIN_DOOR_SIZE ||
      Number(doorSize) > MAX_DOOR_SIZE;

    if (isDoorInValid) {
      issue.message = ERROR_MESSAGES.doorSizes;
      setFieldError(issue, setError);
      return issue;
    }
  }

  return issue;
};

const checkToWall = <T extends ElementType>(
  element: T,
  elementName: string,
  setError: UseFormSetError<SizesFormType>,
) => {
  const issue = {
    code: z.ZodIssueCode.custom,
    path: [`${elementName}.toWall`],
    message: '',
  };

  if (!element.toWall) {
    issue.message = ERROR_MESSAGES.toWallRequired;
    setFieldError(issue, setError);
    return issue;
  }

  return issue;
};

const checkError = (
  error: ErrorType,
  clearErrors: UseFormClearErrors<SizesFormType>,
) => {
  if (!error.message) {
    clearErrors(error.path.join() as WALLS_NAMES_TYPE);
  }
};

export const checkWindow = <T extends ElementType>(
  values: SizesFormType,
  element: T,
  elementName: string,
  setError: UseFormSetError<SizesFormType>,
  clearErrors: UseFormClearErrors<SizesFormType>,
) => {
  const windowSizeError = checkWindowSize(
    values,
    element,
    elementName,
    setError,
  );
  const doorSizeError = checkDoorSize(element, elementName, setError);
  const distanceToWallError = checkDistanceToWall(
    values,
    element,
    elementName,
    undefined,
    setError,
  );
  const toWallError = checkToWall(element, elementName, setError);

  checkError(windowSizeError, clearErrors);
  checkError(doorSizeError, clearErrors);
  checkError(distanceToWallError, clearErrors);
  checkError(toWallError, clearErrors);
};
