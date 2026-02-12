import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Student {
  id: string;
  name: string;
  course: string;
  year: number;
  city?: string;
}

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: {
      reducer: (state, action: PayloadAction<Student>) => {
        state.students.push(action.payload);
      },
      prepare: (student: Omit<Student, "id">) => ({
        payload: { id: nanoid(), ...student },
      }),
    },

    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.students.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state.students[index] = action.payload;
    },

    deleteStudent: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;