import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage.js";

const initialState = {
  roomsState: getItem("rooms") || [],
  filteredRooms : [],
}

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.roomsState.push(action.payload);
    },
    filterByDescription: (state, action) => {
      const filteredRoom = state.roomsState.filter((room) =>
        room.description.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredRooms:
          action.payload.length > 0 ? filteredRoom : [...state.roomsState]
      };
    },
    editRoom: (state, action) => {
      const room = state.roomsState.find((room) => room.id === action.payload.id);
      room.description = action.payload.description
    },
    deleteRoom: (state, action) => {
      return {
        ...state,
        roomsState: state.roomsState.filter((room) => room.id !== action.payload.id),
        filteredRooms: state.filteredRooms.filter((room) => room.id !== action.payload.id)
      } 
    },
    sortBy : (state, action) => {
      state.roomsState.sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
    }
  },
});

export const { addRoom } =
  roomsSlice.actions;

export default roomsSlice.reducer;
