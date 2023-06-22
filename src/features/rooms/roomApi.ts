import { createAsyncThunk } from "@reduxjs/toolkit";
import { roomsList } from "../../mockData/Rooms";
import { Room } from "../../interfaces/interfaces";

export const getRooms = createAsyncThunk(
  'rooms/getRooms',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(roomsList);
     }, 1000))
      return response as Room[];
  }
);

export const postRoom = createAsyncThunk(
  "type/postRoom",
  async (payload: Room | null) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload);
     }, 1000))  
      return response as Room;
  }
);

export const editRequestRoom = createAsyncThunk(
  "type/editRequestRoom",
  async (payload: Room | null) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload);
     }, 1000))
      return response as Room;
  }
);

export const deleteRequestRoom = createAsyncThunk(
  "type/deleteRoom",
  async (payload: string) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response as String
  }
);