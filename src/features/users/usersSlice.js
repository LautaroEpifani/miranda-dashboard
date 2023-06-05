import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage.js";

const initialState = {
  usersState: getItem("users") || [],
  filteredUsers : [],
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersState.push(action.payload);
    },
    filterByDescription: (state, action) => {
      const filteredUsers = state.usersState.filter((user) =>
        user.description.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredUsers:
          action.payload.length > 0 ? filteredUsers : [...state.usersState]
      };
    },
    editRoom: (state, action) => {
      const user = state.usersState.find((user) => user.id === action.payload.id);
      user.description = action.payload.description
    },
    deleteRoom: (state, action) => {
      return {
        ...state,
        usersState: state.usersState.filter((user) => user.id !== action.payload.id),
        filteredUsers: state.filteredUsers.filter((user) => user.id !== action.payload.id)
      } 
    },
    sortBy : (state, action) => {
      state.usersState.sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
    }
  },
});

export const { addUser } =
  usersSlice.actions;

export default usersSlice.reducer;
