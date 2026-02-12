import { createAction, createReducer } from "redux-act";

export interface Student {
  id: string;
  name: string;
  course: string;
  year: number;
  city?: string;
}

export const addStudent = createAction<Student>("students/add");
export const deleteStudent = createAction<string>("students/delete");
export const updateStudent = createAction<string>("students/update");


const initialState = {
  students: [] as Student[]
};

export const studentReducer = createReducer(
  {
    [addStudent.toString()]: (state, student) => ({
      ...state,
      students: [...state.students, student]
    }),

    [deleteStudent.toString()]: (state, id) => ({
      ...state,
      students: state.students.filter(s => s.id !== id)
    }),

   [updateStudent.toString()]: (state, updatedStudent) => ({
      ...state,
      students: state.students.map(s =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    }),
    
  },
  initialState
);