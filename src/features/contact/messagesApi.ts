import { createAsyncThunk } from "@reduxjs/toolkit";
import { messagesList } from "../../mockData/Messages";
import { Message } from "../../interfaces/interfaces";

const API_URI = process.env.REACT_APP_API_URI;

export const getMessages = createAsyncThunk("messages/getMessages", async () => {
  const response = await fetch(`${API_URI}/api/messages`);
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
