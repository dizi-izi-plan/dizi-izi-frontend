import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

type ModalState = {
  currentModal: string | null;
};

const initialState: ModalState = {
  currentModal: null,
};

const modalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentModal: (state, action) => {
      state.currentModal = action.payload;
    },
  },
});

export const { setCurrentModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectCommonModal = (state: RootState) => state.modal.currentModal;
