import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUsers, postUser, editUser, deleteUser } from "./usersApi";
import { User } from "../../interfaces/interfaces";

interface InitialState {
  usersState: User[];
  loading: string;
}

const initialState: InitialState = {
  usersState: [],
  loading: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sortUsers: (state, action: PayloadAction<string>) => {
      state.usersState.sort((a, b) =>
        a[action.payload as keyof User] > b[action.payload as keyof User]
          ? 1
          : -1
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.usersState = action.payload;
      state.loading = "fulfilled";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.usersState = [];
      state.loading = "rejected";
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.usersState.push(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      const user = state.usersState.find(
        (user) => user.id === action.payload.id
      );
      const {
        contact,
        description,
        email,
        employee_name,
        image,
        start_date,
        status,
        position,
      } = action.payload;
      if (user) {
        user.contact = contact;
        user.description = description;
        user.email = email;
        user.employee_name = employee_name;
        user.image = image;
        user.start_date = start_date;
        user.status = status;
        user.position = position;
      }
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return {
        ...state,
        usersState: state.usersState.filter(
          (user) => user.id !== action.payload
        ),
      };
    });
  },
});

export const { sortUsers } = usersSlice.actions;

export default usersSlice.reducer;
