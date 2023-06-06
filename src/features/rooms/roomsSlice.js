import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage.js";
import  { roomsList }  from "../../mockData/Rooms.js";

const initialState = {
  roomsState:  roomsList || [],  // getItem("rooms")
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const getRooms = createAsyncThunk(
  'rooms/getRooms',
  async () => {
      const response = await new Promise((res) =>  setTimeout(() => {
       res(roomsList)
     }, 1000))
      return response;
  }
);

export const postRoom = createAsyncThunk(
  "type/postRoom",
  async (payload) => {
    console.log(payload)
      const response = await new Promise((res) =>  setTimeout(() => {
       res(roomsList)
     }, 1000))
      response.push(payload)
      return response
  }
);

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.roomsState.push(action.payload);
    },
    editRoom: (state, action) => {
      const room = state.roomsState.find((room) => room.id === action.payload.id);
      const {  room_type, room_number, price, offer_price, amenities } = action.payload
      room.room_type = room_type;
      room.room_number = room_number;
      room.price = price;
      room.offer_price = offer_price;
      room.amenities = amenities;
    },  
    deleteRoom: (state, action) => {
     
    },
    sortBy : (state, action) => {
      state.roomsState.sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.roomsState = action.payload
    })
  },
});

export const { addRoom, editRoom, } =
  roomsSlice.actions;

export default roomsSlice.reducer;
