import { configureStore } from '@reduxjs/toolkit';
import { fieldOnFocusReducer } from './slices/focusedFields-slice';
import { modalReducer } from './slices/modal-slice';
import current from './slices/current-slice';
import { diziIziSplitApi } from './slices/diziIziSplitApi-slice';
import { CitiesApi } from './slices/cities-slice';

export const store = configureStore({
  reducer: {
    fieldOnFocus: fieldOnFocusReducer,
    modal: modalReducer,
    current,
    [diziIziSplitApi.reducerPath]: diziIziSplitApi.reducer,
    [CitiesApi.reducerPath]: CitiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(diziIziSplitApi.middleware)
      .concat(CitiesApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
