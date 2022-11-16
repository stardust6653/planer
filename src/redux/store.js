import { configureStore } from "@reduxjs/toolkit";
import inputTextValueReducer from "./modules/inputValueSlice";
import ExistPlanReducer from "./modules/ExistPlanSlice";

export const store = configureStore({
  reducer: {
    value: inputTextValueReducer,
    booleanReader: ExistPlanReducer,
  },
});
