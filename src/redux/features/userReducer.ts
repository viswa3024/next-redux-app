export interface User {
  id: string;
  name: string;
  age: number;
  address: string;
  presentLocation?: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

// ACTION TYPES
const ADD_USER = "users/addUser";
const UPDATE_USER = "users/updateUser";
const DELETE_USER = "users/deleteUser";

// REDUCER
export default function userReducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(u => u.id === action.payload.id ? action.payload : u),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.payload),
      };

    default:
      return state;
  }
}

//// ACTION CREATORS (replaces prepare)
const generateId = () => Math.random().toString(36).substring(2, 9);

export const addUser = (user: Omit<User, "id">) => ({
  type: ADD_USER,
  payload: { id: generateId(), ...user },
});

export const updateUser = (user: User) => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (id: string) => ({
  type: DELETE_USER,
  payload: id,
});