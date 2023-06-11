import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingsList } from "../../mockData/Bookings";

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(bookingsList)
     }, 1000))
      return response
  }
);

export const postBooking = createAsyncThunk(
  "type/postBooking",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))  
      return response
  }
);

export const editBooking = createAsyncThunk(
  "type/editBooking",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);

export const deleteBooking = createAsyncThunk(
  "type/deleteBooking",
  async (payload) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response
  }
);