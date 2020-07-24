import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  update: false,
};

const updateSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    update(state) {
      state.update = !state.update;
    },
  },
});

export const {update} = updateSlice.actions;
export default updateSlice.reducer;
