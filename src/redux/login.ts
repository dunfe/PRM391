import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  "jwtToken": "",
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ jwtToken: string }>) {
      state.jwtToken = action.payload.jwtToken;
    },
  },
});

export const {signIn} = loginSlice.actions;
export default loginSlice.reducer;
