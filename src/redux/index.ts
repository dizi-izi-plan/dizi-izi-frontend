import { configureStore } from '@reduxjs/toolkit';
import { fieldOnFocusReducer } from './slices/focusedFields-slice';
import current from './slices/current-slice';
import { apiCities } from './slices/api-slice';

export const store = configureStore({
  reducer: {
    fieldOnFocus: fieldOnFocusReducer,
    current,
    [apiCities.reducerPath]: apiCities.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCities.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
