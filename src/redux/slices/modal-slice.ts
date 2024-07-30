import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { ReactNode } from 'react';

type TModalCommonData = {
  text: string[];
  icon?: ReactNode;
  сonsentText?: string;
  сonsentCallback?: () => void;
  dissentText?: string;
  dissentCallback?: () => void;
};

type ModalState = {
  commonModal: {
    isOpen: boolean;
    data: TModalCommonData | null;
  };
};

const initialState: ModalState = {
  commonModal: {
    isOpen: false,
    data: null,
  },
};

const modalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openCommonModal: (state, action) => {
      state.commonModal.isOpen = true;
      state.commonModal.data = action.payload;
    },
    closeCommonModal: (state) => {
      state.commonModal.isOpen = false;
      state.commonModal.data = null;
    },
  },
});

export const { openCommonModal, closeCommonModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectCommonModal = (state: RootState) => state.modal.commonModal;
