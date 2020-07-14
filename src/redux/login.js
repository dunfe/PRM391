import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  "jwtToken": "",
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signIn(state, action) {
      state.jwtToken=action.payload;
    },
  },
});

export const {signIn} = loginSlice.actions;
export default loginSlice.reducer;
