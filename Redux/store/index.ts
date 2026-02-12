import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import landingPageSwitcherReducer from "./slices/landingPageSwitcherSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landingPageSwitcher: landingPageSwitcherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
