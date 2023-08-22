import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../../interfaces/interfaces";
import { getItem } from "../../utils/localStorage";

const API_URI = process.env.REACT_APP_API_URI;

export const getBookings = createAsyncThunk("type/getBookings", async () => {
  const token = await getItem("token");
  const response = await fetch(`${API_URI}/api/bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json as Booking[];
});

export const postBooking = createAsyncThunk("type/postBooking", async (payload: Booking) => {
  const token = await getItem("token");
  await fetch(`${API_URI}/api/bookings`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as Booking;
});

export const editBooking = createAsyncThunk("type/editBooking", async (payload: Booking) => {
  const token = await getItem("token");
  await fetch(`${API_URI}/api/bookings/` + payload._id, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as Booking;
});

export const deleteBooking = createAsyncThunk("type/deleteBooking", async (payload: string | undefined) => {
  const token = await getItem("token");
  await fetch(`${API_URI}/api/bookings/` + payload, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return payload as string | undefined;
});

