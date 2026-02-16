import { configureStore } from "@reduxjs/toolkit";
import landingPageSwitcherReducer from "./slices/landingPageSwitcherSlice";

export const store = configureStore({
  reducer: {
    landingPageSwitcher: landingPageSwitcherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
