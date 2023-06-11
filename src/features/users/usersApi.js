import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersList } from "../../mockData/Users";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(usersList)
     }, 1000))
      return response
  }
);

export const postUser = createAsyncThunk(
  "type/postUser",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))  
      return response
  }
);

export const editUser = createAsyncThunk(
  "type/editUser",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);

export const deleteUser = createAsyncThunk(
  "type/deleteUser",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);