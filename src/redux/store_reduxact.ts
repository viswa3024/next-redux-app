import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./reduxact/counter";
import { userReducer } from "./reduxact/users";
import { studentReducer } from "./reduxact/students";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  students: studentReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 