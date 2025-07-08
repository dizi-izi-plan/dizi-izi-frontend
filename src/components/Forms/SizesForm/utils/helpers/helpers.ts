import { z } from 'zod';
import { UseFormSetError } from 'react-hook-form';
import { ElementType, ErrorType, SizesFormType } from '../types/types';
import { WALL_NUM, WALLS_NAMES_TYPE } from '../../Steps/Step1';
import { ERROR_MESSAGES, MIN_DISTANCE_TO_WALL } from '../consts/consts';

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

export const setFieldError = (
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
