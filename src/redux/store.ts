import { createStore, combineReducers } from "redux";
import userReducer from "./features/userReducer";
import studentReducer from "./features/studentReducer";
import counterReducer from "./features/counterReducer";

const rootReducer = combineReducers({
  users: userReducer,
  students: studentReducer,
  counter: counterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 