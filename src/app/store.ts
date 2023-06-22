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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch