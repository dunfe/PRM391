import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  "email": "",
  "jwtToken": "",
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signIn(state, action) {
      state.jwtToken = action.payload.jwtToken;
      state.email = action.payload.email;
    },
    logOut(state) {
      state.email = "";
      state.jwtToken = "";
    },
  },
});

export const {signIn, logOut} = loginSlice.actions;
export default loginSlice.reducer;
