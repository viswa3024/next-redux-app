"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { deleteStudent } from "@/redux/reduxact/students";

export default function StudentTable() {
  const students = useSelector((state: RootState) => state.students.students);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Students</h2>

      <table className="w-full border text-center">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Year</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id} className="border-t">
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.year}</td>
              <td>{s.city || "-"}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteStudent(s.id))}
                  className="bg-red-500 text-white px-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}