import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../interfaces/interfaces";

const API_URI = process.env.REACT_APP_API_URI;

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await fetch(`${API_URI}/api/users`);
    const json = await response.json();
    return json as User[];
  }
);

export const postUser = createAsyncThunk(
  "type/postUser",
  async (payload: User) => {
    await fetch(`${API_URI}/api/users`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return payload as User;
  }
);

export const editUser = createAsyncThunk(
  "type/editUser",
  async (payload: User) => {
    await fetch(`${API_URI}/api/users/` + payload._id, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return payload as User;
  }
);

export const deleteUser = createAsyncThunk(
  "type/deleteUser",
  async (payload: string | undefined) => {
    await fetch(`${API_URI}/api/users/` + payload, {
      method: "DELETE",
    });
    return payload as string | undefined;
  }
);