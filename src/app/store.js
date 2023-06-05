import { configureStore } from '@reduxjs/toolkit';
import  roomsReducer  from '../features/rooms/roomsSlice';
import  usersReducer  from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    users: usersReducer,
  },
});
