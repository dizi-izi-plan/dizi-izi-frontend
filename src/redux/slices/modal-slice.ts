import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

type ModalState = {
  currentModal: string | null;
  snackbar: {
    isOpen: boolean;
    message: string;
    severity: 'error' | 'info' | 'success' | 'warning';
  } | null;
};

const initialState: ModalState = {
  currentModal: null,
  snackbar: null,
};

const modalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentModal: (state, action) => {
      state.currentModal = action.payload;
    },
    setSnackbar: (state, action) => {
      state.snackbar = action.payload;
    },
  },
});

export const { setCurrentModal, setSnackbar } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectCommonModal = (state: RootState) => state.modal.currentModal;
export const selectSnackbar = (state: RootState) => state.modal.snackbar;
