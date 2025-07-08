import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "shared/api/cocktailApi";

export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(cocktailApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
