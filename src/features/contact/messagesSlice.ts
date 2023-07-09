import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getMessages, getArchivedMessages, postArchiveMessage, archiveMessage } from "./messagesApi";
import { Message } from "../../interfaces/interfaces";

interface InitialState {
  messagesState: Message[];
  archivedState: Message[];
  loading: string;
}


const initialState: InitialState = {
  messagesState: [],
  archivedState: [],
  loading: 'idle'
}

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    sortMessages: (state, action) => {
      
        state.messagesState.sort((a, b) => a[action.payload as keyof Message] > b[action.payload as keyof Message] ? 1 : -1)
        state.archivedState.sort((a, b) => a[action.payload as keyof Message] > b[action.payload as keyof Message] ? 1 : -1)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messagesState = action.payload
      state.loading = "fulfilled"
    })
    builder.addCase(getMessages.rejected, (state, action) => {
      state.messagesState = []
      state.loading = "rejected"
    })
    builder.addCase(getArchivedMessages.pending, (state, action) => {
      state.loading = "pending"
    })
    builder.addCase(getArchivedMessages.fulfilled, (state, action) => {
      state.archivedState = action.payload
      state.loading = "fulfilled"
    })
    builder.addCase(getArchivedMessages.rejected, (state, action) => {
      state.archivedState = []
      state.loading = "rejected"
    })
    builder.addCase(postArchiveMessage.fulfilled, (state, action) => { 
      state.archivedState.push(action.payload)
    })
    builder.addCase(archiveMessage.fulfilled, (state, action) => { 
      return {
        ...state,
        messagesState:  state.messagesState.filter((message ) => message.id !== action.payload)
      }
    })
  },
});

export const { sortMessages } =
  messagesSlice.actions;

export default messagesSlice.reducer;
