import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const messageUrl = 'http://127.0.0.1:3000/api/v1/messages';
export const fetchMessage = createAsyncThunk('/messages', async () => {
  try {
    const response = await fetch(messageUrl);
    const message = await response.json();
    return message;
  } catch (err) {
    throw new Error(err);
  }
});

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default messageSlice.reducer;
