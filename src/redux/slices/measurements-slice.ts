import { createSlice } from '@reduxjs/toolkit';
import { setProperty } from '../baseReducer';

export const defaultWallsValues = {
  firstWall: 'стена 1',
  secondWall: 'стена 2',
  thirdWall: 'стена 3',
  forthWall: 'стена 4',
} as const;

const initialState = {
  walls: defaultWallsValues,
  doors: {},
  windows: {},
  currentStep: 0,
};

export const measurementsSlice = createSlice({
  name: 'measurements',
  initialState,
  reducers: {
    setCurrentStep: setProperty,
    setWallsValues: setProperty,
  },
});

const { actions, reducer } = measurementsSlice;
export const { setCurrentStep, setWallsValues } = actions;
export default reducer;
