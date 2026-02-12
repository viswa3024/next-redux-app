import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";
import studentReducer from "./features/studentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    students: studentReducer,
  },
 devTools: true, // <-- enable
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;