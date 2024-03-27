import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const initialState = { isStepValid: false };

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setIsStepValid: (state, action) => {
      state.isStepValid = action.payload;
    },
  },
});

const { actions, reducer } = currentSlice;
export const { setIsStepValid } = actions;
export default reducer;

export const selectIsStepValid = (state: RootState) =>
  state.current.isStepValid;
