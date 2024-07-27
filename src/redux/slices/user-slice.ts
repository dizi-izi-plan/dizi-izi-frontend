import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface ProfileData {
  id: string | null;
  email: string | null;
}

interface UserState {
  isAuth: boolean;
  userData: ProfileData;
}

const initialState: UserState = {
  isAuth: false,
  userData: {
    id: null,
    email: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUserData: (state, action) => {
      if (action.payload) state.userData = action.payload;
      else state.userData = { id: null, email: null };
    },
  },
});

export const { setIsAuth, setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectUserData = (state: RootState) => state.user.userData;
