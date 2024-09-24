import { z } from 'zod';
import { SizesFormType, WALL_NUM } from '../../types';
import { ERROR_MESSAGES, MIN_DISTANCE_TO_WALL } from './consts';

type ElementType = {
  distanceToWall: string;
  wallNumber: string;
  size: string;
  doorSize?: string;
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

export const checkDistanceToWall = <T extends ElementType>(
  values: SizesFormType,
  element: T,
  elementName: 'door' | 'windows.windows',
  context?: z.RefinementCtx,
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
    return issue;
  }

  return issue;
};
