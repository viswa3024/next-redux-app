"use client";

import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { addStudent } from "@/redux/features/studentSlice";
import type { AppDispatch, RootState } from "@/redux/store";

export default function StudentForm() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useStore<RootState>();

  const [form, setForm] = useState({
    name: "",
    course: "",
    year: 1,
    city: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addStudent(form));

     // print complete redux state
    console.log("FULL REDUX STATE => ", store.getState());

    setForm({ name: "", course: "", year: 1, city: "" });
  };

  return (
    <form onSubmit={submit} className="bg-white shadow p-4 rounded space-y-3">
      <h2 className="text-xl font-bold">Add Student</h2>

      <input className="border p-2 w-full" placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input className="border p-2 w-full" placeholder="Course"
        value={form.course}
        onChange={e => setForm({ ...form, course: e.target.value })}
      />

      <input className="border p-2 w-full" type="number" placeholder="Year"
        value={form.year}
        onChange={e => setForm({ ...form, year: Number(e.target.value) })}
      />

      <input className="border p-2 w-full" placeholder="City (optional)"
        value={form.city}
        onChange={e => setForm({ ...form, city: e.target.value })}
      />

      <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">
        Add Student
      </button>
    </form>
  );
}