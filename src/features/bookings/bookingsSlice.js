import { createSlice } from "@reduxjs/toolkit";
import { getBookings, postBooking, editBooking, deleteBooking } from "./bookingsApi";

const initialState = {
  bookingsState: [],
  loading: 'idle'
}

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    sortBookings: (state, action) => {
        state.bookingsState.sort((a, b) => a[action.payload] > b[action.payload] ? 1 : -1)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookings.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getBookings.fulfilled, (state, action) => {
      console.log(action.payload)
      state.bookingsState = action.payload
      state.loading = "fulfilled"
    })
    builder.addCase(getBookings.rejected, (state, action) => {
      state.bookingsState = []
      state.loading = "rejected"
    })
    builder.addCase(postBooking.fulfilled, (state, action) => { 
      console.log(action.payload)
      state.bookingsState.push(action.payload)
    })
    builder.addCase(editBooking.fulfilled, (state, action) => { 
      console.log(action.payload)
       const booking = state.bookingsState.find((booking) => booking.id === action.payload.id);
        const { guest, room_type, room_number, special_request, order_date, check_in, check_out, status } = action.payload
        booking.room_type = room_type;
        booking.room_number = room_number;
        booking.special_request = special_request;
        booking.order_date = order_date;
        booking.guest = guest;
        booking.check_in = check_in;
        booking.check_out = check_out;
        booking.status = status;
    })
    builder.addCase(deleteBooking.fulfilled, (state, action) => { 
      return {
        ...state,
        bookingsState:  state.bookingsState.filter((booking) => booking.id !== action.payload)
      }
    })
  },
});

export const { sortBookings } =
  bookingsSlice.actions;

export default bookingsSlice.reducer;
