import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

export type TFieldOnFocus = { data: string | null };

const initialState: TFieldOnFocus = { data: null };

const fieldOnFocusSlice = createSlice({
  name: 'fieldOnFocus',
  initialState,
  reducers: {
    addBedroomFocusedField: (state, action) => {
      state.data = action.payload;
    },
    deleteBedroomFocusedField: (state) => {
      state.data = null;
    },
  },
  extraReducers: {},
});

export const { addBedroomFocusedField, deleteBedroomFocusedField } =
  fieldOnFocusSlice.actions;

export const fieldOnFocusReducer = fieldOnFocusSlice.reducer;

export const selectFieldOnFocus = (state: RootState) => state.fieldOnFocus.data;
