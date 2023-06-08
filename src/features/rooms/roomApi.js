import { createAsyncThunk } from "@reduxjs/toolkit";
import { roomsList } from "../../mockData/Rooms";

export const getRooms = createAsyncThunk(
  'rooms/getRooms',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(roomsList)
     }, 1000))
     console.log(response)
      return response;
  }
);

export const postRoom = createAsyncThunk(
  "type/postRoom",
  async (payload) => {
    console.log("entra")
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))  
     console.log(response)
      return response
  }
);

export const editRequestRoom = createAsyncThunk(
  "type/editRequestRoom",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);

export const deleteRequestRoom = createAsyncThunk(
  "type/deleteRoom",
  async (payload) => {
    console.log(payload)
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);