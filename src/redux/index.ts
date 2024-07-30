import { configureStore } from '@reduxjs/toolkit';
import { fieldOnFocusReducer } from './slices/focusedFields-slice';
import { userReducer } from './slices/user-slice';
import { modalReducer } from './slices/modal-slice';
import current from './slices/current-slice';
import { apiCities, apiDiziIzi } from './slices/api-slice';

export const store = configureStore({
  reducer: {
    fieldOnFocus: fieldOnFocusReducer,
    user: userReducer,
    modal: modalReducer,
    current,
    [apiDiziIzi.reducerPath]: apiDiziIzi.reducer,
    [apiCities.reducerPath]: apiCities.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiDiziIzi.middleware)
      .concat(apiCities.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
