import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface FeedState {
  title: string;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: FeedState = {
  title: "Hello Guys",
  isLoading: false,
};

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/photos");
    const data = await res.data;

    return data;
  }
);

export const feedSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateTitle: (state) => {
      state.title = "New ";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { updateTitle } = feedSlice.actions;

export default feedSlice.reducer;
