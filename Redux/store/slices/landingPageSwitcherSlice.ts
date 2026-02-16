import { SwitcherState } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SwitcherState = {
    page: "main",
    selectedPage: ""
};

const landingPageSwitcherSlice = createSlice({
    name: "landingPageSwitcher",
    initialState,
  reducers: {
    changeSwitcherVal: (state, action: PayloadAction<SwitcherState>) => {
      state.page = action.payload.page;
      state.selectedPage = action.payload.selectedPage;
    },
  },
});

export const { changeSwitcherVal } = landingPageSwitcherSlice.actions;
export default landingPageSwitcherSlice.reducer;
