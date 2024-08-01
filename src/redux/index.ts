import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/cities-slice';
import { fieldOnFocusReducer } from './slices/focusedFields-slice';
import current from './slices/current-slice';
import { authApi } from '@/api/apiSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    fieldOnFocus: fieldOnFocusReducer,
    current,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
