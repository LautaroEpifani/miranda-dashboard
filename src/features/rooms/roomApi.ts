import { createAsyncThunk } from "@reduxjs/toolkit";
import { Room } from "../../interfaces/interfaces";
import { getItem } from "../../utils/localStorage";

const API_URI = process.env.REACT_APP_API_URI;
let token = "";

export const getRooms = createAsyncThunk("type/getRooms", async () => {
  token = await getItem("token");
  const response = await fetch(`${API_URI}/api/rooms`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json as Room[];
});

export const getRoom = createAsyncThunk("type/getRoom", async (payload: string | undefined) => {
  const response = await fetch(`${API_URI}/api/rooms/` + payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json as Room;
});

export const postRoom = createAsyncThunk("type/postRoom", async (payload: Room) => {
  await fetch(`${API_URI}/api/rooms`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as Room;
});

export const editRequestRoom = createAsyncThunk("type/editRoom", async (payload: Room) => {
  await fetch(`${API_URI}/api/rooms/` + payload._id, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as Room;
});

export const deleteRequestRoom = createAsyncThunk("type/deleteRoom", async (payload: string | undefined) => {
  await fetch(`${process.env.REACT_APP_API_URI}/api/rooms/` + payload, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as string | undefined;
});
