import { createAction, createReducer } from "redux-act";

export interface User {
  id: string;
  name: string;
  age: number;
  address: string;
  presentLocation?: string;
}

export const addUser = createAction<User>("users/add");
export const updateUser = createAction<User>("users/update");
export const deleteUser = createAction<string>("users/delete");

const initialState = {
  users: [] as User[]
};

export const userReducer = createReducer(
  {
    [addUser.toString()]: (state, user) => ({
      ...state,
      users: [...state.users, user]
    }),

    [updateUser.toString()]: (state, updated) => ({
      ...state,
      users: state.users.map(u => u.id === updated.id ? updated : u)
    }),

    [deleteUser.toString()]: (state, id) => ({
      ...state,
      users: state.users.filter(u => u.id !== id)
    })
  },
  initialState
);