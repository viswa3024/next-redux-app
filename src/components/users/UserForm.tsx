"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/features/userSlice";
import type { AppDispatch } from "@/redux/store";

export default function UserForm() {
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    name: "",
    age: 0,
    address: "",
    presentLocation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addUser(form));

    setForm({
      name: "",
      age: 0,
      address: "",
      presentLocation: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded-lg space-y-3"
    >
      <h2 className="text-xl font-bold">Add User</h2>

      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
      />

      <input
        className="border p-2 w-full"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        placeholder="Present Location (optional)"
        value={form.presentLocation}
        onChange={(e) =>
          setForm({ ...form, presentLocation: e.target.value })
        }
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Add User
      </button>
    </form>
  );
}