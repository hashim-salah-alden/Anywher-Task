import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
  loading: string;
  authError: null;
}

const initialState: AuthState = {
  isLoggedIn: true,
  loading: "idle",
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { LogInOut } = authSlice.actions;
export default authSlice.reducer;
