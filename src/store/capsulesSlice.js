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
    setFilteredCapsules: (state, action) => {
      state.filtered = action.payload;
    },
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
      state.filtered = action.payload;
    });
  },
});

export const { setFilteredCapsules } = capsulesSlice.actions;
export const selectFilteredCapsules = (state) => state.capsules.filtered;
// export const selectCapsules = (state) => state.capsules.list;
export default capsulesSlice.reducer;
// export const { addCapsule, editCapsule } = capsulesSlice.actions;
