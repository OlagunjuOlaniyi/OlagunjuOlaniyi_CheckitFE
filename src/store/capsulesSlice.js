import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCapsules as fetchCapsulesAPI } from "../services/api";

export const fetchCapsules = createAsyncThunk("capsules/fetch", async () => {
  const capsules = await fetchCapsulesAPI();
  return capsules;
});

const capsulesSlice = createSlice({
  name: "capsules",
  initialState: { list: [] },
  reducers: {
    addCapsule: (state, action) => {
      state.list.push(action.payload);
    },
    editCapsule: (state, action) => {
      const index = state.list.findIndex(
        (capsule) => capsule.id === action.payload.id
      );
      if (index >= 0) state.list[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCapsules.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const selectCapsules = (state) => state.capsules.list;
export default capsulesSlice.reducer;
export const { addCapsule, editCapsule } = capsulesSlice.actions;
