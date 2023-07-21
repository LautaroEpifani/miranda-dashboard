import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../../interfaces/interfaces";
import { getItem } from "../../utils/localStorage";

const API_URI = process.env.REACT_APP_API_URI;
let token = "";

export const getMessages = createAsyncThunk("messages/getMessages", async () => {
  token = await getItem("token")
  const response = await fetch(`${API_URI}/api/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json as Message[];
});

// export const getArchivedMessages = createAsyncThunk(
//   'messages/getArchivedMessages',
//   async () => {
//       const response = await new Promise((res) =>  setTimeout(() => {
//        res([])
//      }, 1000))
//       return response as Message[]
//   }
// );

export const postArchiveMessage = createAsyncThunk("type/postArchiveMessage", async (payload: Message) => {
  await fetch(`${API_URI}/api/messages/` + payload._id, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return payload as Message;
});

// export const archiveMessage = createAsyncThunk(
//   "type/archiveMessage",
//   async (payload: string | undefined) => {
//       const response = await new Promise((res) =>  setTimeout(() => {
//        res(payload)
//      }, 1000))
//       return response as string | undefined
//   }
// );
