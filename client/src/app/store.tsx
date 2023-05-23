import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../shared";
import { storeSlice } from "../shared";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: storeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type State = ReturnType<typeof store.getState>;
