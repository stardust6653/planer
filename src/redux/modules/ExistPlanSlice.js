import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  condition: false,
};

export const existPlanSlice = createSlice({
  name: "booleanReader",
  initialState,
  reducers: {
    isTrue: {
      reducer: state => {
        state.condition = true;
      },
    },
  },
});

export const { isTrue } = existPlanSlice.actions;
export default existPlanSlice.reducer;
