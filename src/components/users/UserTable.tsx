"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { deleteUser, updateUser, User } from "@/redux/features/userReducer";
import { useState } from "react";

export default function UserTable() {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<User | null>(null);

  const startEdit = (user: User) => {
    setEditingId(user.id);
    setEditData(user);
  };

  const saveEdit = () => {
    if (editData) dispatch(updateUser(editData));
    setEditingId(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Present Location</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t text-center">
              {editingId === u.id ? (
                <>
                  <td>
                    <input
                      value={editData?.name}
                      onChange={(e) =>
                        setEditData({ ...editData!, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editData?.age}
                      onChange={(e) =>
                        setEditData({
                          ...editData!,
                          age: Number(e.target.value),
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editData?.address}
                      onChange={(e) =>
                        setEditData({ ...editData!, address: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editData?.presentLocation}
                      onChange={(e) =>
                        setEditData({
                          ...editData!,
                          presentLocation: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="space-x-2">
                    <button
                      className="bg-green-500 text-white px-2"
                      onClick={saveEdit}
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{u.name}</td>
                  <td>{u.age}</td>
                  <td>{u.address}</td>
                  <td>{u.presentLocation || "-"}</td>
                  <td className="space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-2"
                      onClick={() => startEdit(u)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 text-white px-2"
                      onClick={() => dispatch(deleteUser(u.id))}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}