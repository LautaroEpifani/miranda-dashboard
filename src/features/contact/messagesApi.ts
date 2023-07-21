import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../../interfaces/interfaces";
import { getItem } from "../../utils/localStorage";

const API_URI = process.env.REACT_APP_API_URI;
let token = "";
const tokenRes = async() => {
  token = await getItem("token");
  return token;
}

tokenRes();

export const getMessages = createAsyncThunk("messages/getMessages", async () => {
  const response = await fetch(`${API_URI}/api/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json as Message[];
});

export const postArchiveMessage = createAsyncThunk("type/postArchiveMessage", async (payload: Message) => {
  await fetch(`${API_URI}/api/messages/` + payload._id, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as Message;
});


