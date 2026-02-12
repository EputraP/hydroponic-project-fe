import { SwitcherState } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: SwitcherState = {
  value: "main",
};

const landingPageSwitcherSlice = createSlice({
    name: "landingPageSwitcher",
    initialState,
  reducers: {
    changeSwitcherVal: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeSwitcherVal } = landingPageSwitcherSlice.actions;
export default landingPageSwitcherSlice.reducer;
