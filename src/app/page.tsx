"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "@/redux/features/counterReducer";

import UserForm from "@/components/users/UserForm";
import UserTable from "@/components/users/UserTable";
import StudentForm from "@/components/students/StudentForm";
import StudentTable from "@/components/students/StudentTable";

import { useState } from "react";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [amount, setAmount] = useState(5);

  return (
    <main className="min-h-screen bg-gray-100 p-10 space-y-10">

      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">Users</h1>
        <UserForm />
        <UserTable />
      </section>

      <div className="w-full border-t border-black"></div>

       <section className="space-y-4">
        <h1 className="text-3xl font-bold text-purple-600">Students</h1>
        <StudentForm />
        <StudentTable />
      </section>

       <div className="w-full border-t border-black"></div>
      <div className="mt-[10px] container-box shadow-xl text-center space-y-4 w-[400px] space-y-4">
        <h1 className="text-3xl font-bold">Redux Counter</h1>

        <p className="text-5xl font-bold text-purple-600">{count}</p>

        <div className="flex gap-3 justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="number"
            className="border px-2 py-1 w-20"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <button
            className="bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            Add Amount
          </button>
        </div>

        <button
          className="bg-gray-700 text-white px-4 py-2 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </main>
  );
}