import { configureStore } from "@reduxjs/toolkit";
import capsulesReducer from "./capsulesSlice";

const store = configureStore({
  reducer: {
    capsules: capsulesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;