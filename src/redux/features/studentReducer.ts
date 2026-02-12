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

const ADD_STUDENT = "students/addStudent";
const UPDATE_STUDENT = "students/updateStudent";
const DELETE_STUDENT = "students/deleteStudent";

export default function studentReducer(state = initialState, action: any): StudentState {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.payload] };

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map(s =>
          s.id === action.payload.id ? action.payload : s
        ),
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(s => s.id !== action.payload),
      };

    default:
      return state;
  }
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export const addStudent = (student: Omit<Student, "id">) => ({
  type: ADD_STUDENT,
  payload: { id: generateId(), ...student },
});

export const updateStudent = (student: Student) => ({
  type: UPDATE_STUDENT,
  payload: student,
});

export const deleteStudent = (id: string) => ({
  type: DELETE_STUDENT,
  payload: id,
});