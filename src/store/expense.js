import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_EXPENSE = [
  {
    id: "01",
    name: "Samosa",
    category: "Food",
    price: 15,
  },
  {
    id: "02",
    name: "Movie",
    category: "Entertainment",
    price: 1000,
  },
  {
    id: "03",
    name: "Mumbai",
    category: "Travel",
    price: 10000,
  },
];

const expenseSlice = createSlice({
  name: "expense",
  initialState: DEFAULT_EXPENSE,
  reducers: {
    addExpense: (state, action) => {
      state.unshift(action.payload);
    },
    deleteExpense: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice;
