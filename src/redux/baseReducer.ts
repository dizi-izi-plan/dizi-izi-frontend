import { PayloadAction } from '@reduxjs/toolkit';

export const setProperty = <T>(
  state: T,
  action: PayloadAction<Record<string, unknown>>,
) => ({
  ...state,
  ...action.payload,
});
