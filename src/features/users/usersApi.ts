import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../interfaces/interfaces";
import { getItem } from "../../utils/localStorage";

const API_URI = process.env.REACT_APP_API_URI;
let token = "";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    token = await getItem("token");
    const response = await fetch(`${API_URI}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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