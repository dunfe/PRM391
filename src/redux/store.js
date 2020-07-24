import {configureStore} from '@reduxjs/toolkit';

import loginReducer from "./login";
import cartReducer from "./cart";
import updateReducer from "./add";

export default configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    add: updateReducer,
  },
});
