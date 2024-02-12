import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/cities-slice';
import { fieldOnFocusReducer } from './slices/focusedFields-slice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    fieldOnFocus: fieldOnFocusReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
