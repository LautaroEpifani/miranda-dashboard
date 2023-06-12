import { createAsyncThunk } from "@reduxjs/toolkit";
import { messagesList } from "../../mockData/Messages";

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(messagesList)
     }, 1000))
      return response
  }
);

export const getArchivedMessages = createAsyncThunk(
  'messages/getArchivedMessages',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res([])
     }, 1000))
      return response
  }
);

export const postArchiveMessage = createAsyncThunk(
  "type/postArchiveMessage",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))  
      return response
  }
);

export const archiveMessage = createAsyncThunk(
  "type/archiveMessage",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);