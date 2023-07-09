import { configureStore } from '@reduxjs/toolkit';
import  roomsReducer  from '../features/rooms/roomsSlice';
import  usersReducer  from '../features/users/usersSlice';
import bookingsReducer from '../features/bookings/bookingsSlice'
import usersMessages from '../features/contact/messagesSlice'

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    bookings: bookingsReducer,
    users: usersReducer,
    messages: usersMessages,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch