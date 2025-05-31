import { z } from 'zod';
import { UseFormClearErrors, UseFormSetError } from 'react-hook-form';
import {
  checkDistanceToWall,
  ElementType,
  ERROR_MESSAGES,
  ErrorType,
  getSizes,
  MIN_DISTANCE_BETWEEN_WINDOWS,
  MIN_DISTANCE_TO_WALL,
  setFieldError,
  SizesFormType,
} from '@/components/Forms/SizesForm';
import {
  MIN_WINDOW_SIZE,
  MIN_WINDOW_WITH_BALCONY_SIZE,
} from '../consts/consts';
import { MAX_DOOR_SIZE, MIN_DOOR_SIZE } from '../../../Step2';
import { WALL_NUM, WALLS_NAMES_TYPE } from '../../../Step1';

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

  const { wallLength, elementSize, distanceToWall } = getSizes(values, element);

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

  if (Number(elementSize) + Number(distanceToWall) > Number(wallLength)) {
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

export const checkWindowsOfSameWall = (
  values: SizesFormType,
  setError: UseFormSetError<SizesFormType>,
  clearErrors: UseFormClearErrors<SizesFormType>,
) => {
  if (!values.windows || !values.windows.windows) {
    return;
  }

  const [
    {
      wallNumber: firstWallNumber,
      size: firstSize,
      doorSize: firstDoorSize = 0,
      distanceToWall: firstDistanceToWall,
      toWall: firstToWall,
    },
    {
      wallNumber: secondWallNumber,
      size: secondSize,
      doorSize: secondDoorSize = 0,
      distanceToWall: secondDistanceToWall,
      toWall: secondToWall,
    },
  ] = [...values.windows.windows].sort(
    (a, b) => Number(a.distanceToWall) - Number(b.distanceToWall),
  );

  if (firstWallNumber !== secondWallNumber) {
    return;
  }

  const issue = {
    code: z.ZodIssueCode.custom,
    path: [`windows.windows`],
    message: '',
  };

  const wallNum = firstWallNumber.split('.')[1] as WALL_NUM;
  const wallSize = values.walls[wallNum as WALL_NUM];

  const sum =
    firstToWall === secondToWall
      ? Number(secondDistanceToWall) +
        Number(secondSize) +
        Number(secondDoorSize) +
        MIN_DISTANCE_TO_WALL
      : Number(firstSize) +
        Number(firstDoorSize) +
        Number(secondSize) +
        Number(secondDoorSize) +
        MIN_DISTANCE_BETWEEN_WINDOWS +
        Number(firstDistanceToWall) +
        Number(secondDistanceToWall);

  const firstEnd =
    Number(firstDistanceToWall) + Number(firstSize) + Number(firstDoorSize);

  const secondStart =
    firstToWall === secondToWall
      ? Number(secondDistanceToWall)
      : Number(wallSize) -
        (Number(secondDistanceToWall) +
          Number(secondSize) +
          Number(secondDoorSize));

  if (secondStart - firstEnd < MIN_DISTANCE_BETWEEN_WINDOWS) {
    issue.message = ERROR_MESSAGES.windowsSameWallWindowDistance;
    setFieldError(issue, setError);
  }

  if (sum > Number(wallSize)) {
    issue.message = ERROR_MESSAGES.windowsSameWallSize;
    setFieldError(issue, setError);
  }

  checkError(issue, clearErrors);
  return issue;
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
