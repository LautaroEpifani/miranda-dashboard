import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingsList } from "../../mockData/Bookings";
import { Booking } from "../../interfaces/interfaces";

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(bookingsList)
     }, 1000))
      return response as Booking[];
  }
);

export const postBooking = createAsyncThunk(
  "type/postBooking",
  async (payload: Booking) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload);
     }, 1000))  
      return response as Booking;
  }
);

export const editBooking = createAsyncThunk(
  "type/editBooking",
  async (payload: Booking) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload);
     }, 1000))
      return response as Booking;
  }
);

export const deleteBooking = createAsyncThunk(
  "type/deleteBooking",
  async (payload: string) => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(payload)
     }, 1000))
      return response as String
  }
);