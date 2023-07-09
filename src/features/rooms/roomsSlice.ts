import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequestRoom,
  editRequestRoom,
  getRooms,
  postRoom,
} from "./roomApi";
import { Room } from "../../interfaces/interfaces";

interface InitialState {
  roomsState: Room[];
  loading: string;
}

const initialState: InitialState = {
  roomsState: [],
  loading: "idle",
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.roomsState.push(action.payload);
    },
    editRoom: (state, action) => {
      const room: Room | undefined = state.roomsState.find(
        (room) => room.id === action.payload.id
      );
      const { room_type, room_number, price, offer_price, amenities } =
        action.payload;
      if (room) {
        room.room_type = room_type;
        room.room_number = room_number;
        room.price = price;
        room.offer_price = offer_price;
        room.amenities = amenities;
      }
    },
    deleteRoom: (state, action) => {
      return {
        ...state,
        roomsState: state.roomsState.filter(
          (room) => room.id !== action.payload
        ),
      };
    },
    sortBy: (state, action: PayloadAction<string>) => {
      if (action.payload === "booked") {
        state.roomsState.sort((a, b) => (a.status > b.status ? 1 : -1));
      }
      if (action.payload === "avaliable") {
        state.roomsState.sort((a, b) => (a.status > b.status ? 1 : -1));
      } else {
        state.roomsState.sort((a, b) =>
          a[action.payload as keyof Room] < b[action.payload as keyof Room]
            ? 1
            : -1
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRooms.pending, (state, action) => {
      state.loading = " ";
    });
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.roomsState = action.payload;
      state.loading = "fulfilled";
    });
    builder.addCase(getRooms.rejected, (state, action) => {
      state.roomsState = [];
      state.loading = "rejected";
    });
    builder.addCase(postRoom.fulfilled, (state, action) => {
      console.log(action.payload)
      state.roomsState.push(action.payload);
    });
    builder.addCase(editRequestRoom.fulfilled, (state, action) => {
      const room: Room | undefined = state.roomsState.find(
        (room) => room.id === action.payload.id
      );
      const { room_type, room_number, price, amenities, discount } =
        action.payload;
      if (room) {
        room.room_type = room_type;
        room.room_number = room_number;
        room.price = price;
        room.discount = discount;
        room.offer_price = parseInt((room.price - (room.price * room.discount) / 100).toFixed(2));
        room.amenities = amenities;
      }
    });
    builder.addCase(deleteRequestRoom.fulfilled, (state, action) => {
      return {
        ...state,
        roomsState: state.roomsState.filter(
          (room) => room.id !== action.payload
        ),
      };
    });
  },
});

export const { addRoom, editRoom, deleteRoom, sortBy } = roomsSlice.actions;

export default roomsSlice.reducer;
