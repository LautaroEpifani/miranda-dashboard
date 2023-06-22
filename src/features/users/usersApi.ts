import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersList } from "../../mockData/Users";
import { User } from "../../interfaces/interfaces";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(usersList);
     }, 1000))
      return response as User[];
  }
);

export const postUser = createAsyncThunk(
  "type/postUser",
  async (payload: User | null) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload);
     }, 1000))  
      return response as User;
  }
);

export const editUser = createAsyncThunk(
  "type/editUser",
  async (payload: User | null) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload);
     }, 1000))
      return response as User;
  }
);

export const deleteUser = createAsyncThunk(
  "type/deleteUser",
  async (payload: string) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response as string;
  }
);