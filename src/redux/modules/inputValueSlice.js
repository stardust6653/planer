import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  condition: false,
};

export const inputValueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    isConfirm: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: item => {
        const id = nanoid();
        return { payload: { id, ...item } };
      },
    },
    isRemove: {
      reducer: (state, action) => {
        const id = action.payload;
        state.items = state.items.filter(item => item.id !== id);
      },
    },
  },
});

export const { isConfirm, isRemove } = inputValueSlice.actions;

export default inputValueSlice.reducer;
