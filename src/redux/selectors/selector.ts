import { RootState } from '..';

export const selectCurrentStep = (state: RootState) =>
  state.measurements.currentStep;

export const selectWalls = (state: RootState) => state.measurements.walls;
