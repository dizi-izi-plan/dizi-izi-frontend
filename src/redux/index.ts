import { configureStore } from '@reduxjs/toolkit';
import { fieldOnFocusReducer } from './slices/focusedFields-slice';
import { modalReducer } from './slices/modal-slice';
import current from './slices/current-slice';
import { diziIziSplitApi } from './api/diziIzi-splitApi';
import { CitiesApi } from './api/cities-api';
import { yandexAuthApi } from './api/yandexAuth-api';

export const store = configureStore({
  reducer: {
    fieldOnFocus: fieldOnFocusReducer,
    modal: modalReducer,
    current,
    [diziIziSplitApi.reducerPath]: diziIziSplitApi.reducer,
    [CitiesApi.reducerPath]: CitiesApi.reducer,
    [yandexAuthApi.reducerPath]: yandexAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(diziIziSplitApi.middleware)
      .concat(CitiesApi.middleware)
      .concat(yandexAuthApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
