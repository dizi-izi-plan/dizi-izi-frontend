import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/cities-slice';
import measurementsReducer from './slices/measurements-slice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    measurements: measurementsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
