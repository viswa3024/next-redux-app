import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action: PayloadAction<User>) => {
        console.log("addUser: state : ", state)
        state.users.push(action.payload);
      },
      prepare: (user: Omit<User, "id">) => ({
        payload: { id: nanoid(), ...user },
      }),
    },

    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.users[index] = action.payload;
    },

    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;