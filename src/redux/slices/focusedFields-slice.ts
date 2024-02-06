import { createSlice } from '@reduxjs/toolkit';
import { WALLS } from '../../components/Forms/SizesForm/formData';
import { RootState } from '../index';

type TBedroomFields = WALLS.first | WALLS.second | WALLS.third | WALLS.forth;

export type FocusedFieldsState = {
  bedroom: TBedroomFields | null;
};

const initialState: FocusedFieldsState = {
  bedroom: null,
};

const focusedFieldsSlice = createSlice({
  name: 'focusedFields',
  initialState,
  reducers: {
    addBedroomFocusedField: (state, action) => {
      state.bedroom = action.payload;
    },
    deleteBedroomFocusedField: (state) => {
      state.bedroom = null;
    },
  },
  extraReducers: {},
});

export const { addBedroomFocusedField, deleteBedroomFocusedField } =
  focusedFieldsSlice.actions;

export const focusedFieldsReducer = focusedFieldsSlice.reducer;

export const selectBedroomFocusedField = (state: RootState) =>
  state.focusedFields.bedroom;
