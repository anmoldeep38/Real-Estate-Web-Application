import { configureStore } from "@reduxjs/toolkit";
//import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { useReducer } from "react";

export const store = configureStore({
  reducer: { user: useReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
