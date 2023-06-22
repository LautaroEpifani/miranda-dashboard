import { createAsyncThunk } from "@reduxjs/toolkit";
import { messagesList } from "../../mockData/Messages";
import { Message } from "../../interfaces/interfaces";

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(messagesList)
     }, 1000))
      return response as Message[]
  }
);

export const getArchivedMessages = createAsyncThunk(
  'messages/getArchivedMessages',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res([])
     }, 1000))
      return response as Message[]
  }
);

export const postArchiveMessage = createAsyncThunk(
  "type/postArchiveMessage",
  async (payload: Message) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))  
      return response as Message
  }
);

export const archiveMessage = createAsyncThunk(
  "type/archiveMessage",
  async (payload: string) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response as string
  }
);