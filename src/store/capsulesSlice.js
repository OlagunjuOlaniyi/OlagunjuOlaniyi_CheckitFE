import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCapsules as fetchCapsulesAPI } from "../services/api";

export const fetchCapsules = createAsyncThunk("capsules/fetch", async () => {
  const capsules = await fetchCapsulesAPI();
  return capsules;
});

const capsulesSlice = createSlice({
  name: "capsules",
  initialState: { list: [] },
  reducer: {},
});

export const selectCapsules = (state) => state.capsules.list;
export default capsulesSlice.reducer;
