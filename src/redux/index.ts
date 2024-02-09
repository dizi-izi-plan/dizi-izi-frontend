import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/cities-slice';
import { focusedFieldsReducer } from './slices/focusedFields-slice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    focusedFields: focusedFieldsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
