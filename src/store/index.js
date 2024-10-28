import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expense";

const expenseStore = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});

export default expenseStore;
