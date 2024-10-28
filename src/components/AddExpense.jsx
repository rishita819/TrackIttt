import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/expense";

function AddExpense() {
  const [nameVal, setNameVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");

  const dispatch = useDispatch();

  const handleOnsubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now().toLocaleString(),
      name: nameVal,
      price: priceVal,
      category: categoryVal,
    };

    dispatch(addExpense(newExpense));

    setNameVal("");
    setCategoryVal("");
    setPriceVal("");
  };

  return (
    <div style={{ maxWidth: "500px" }} className="p-5">
      <h2 className="text-start text-blue-500 underline text-xl">
        Add Expense
      </h2>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleOnsubmit}>
        <input
          type="text"
          placeholder="Name of expense"
          className="px-3 py-2 text-lg rounded-lg"
          required
          value={nameVal}
          onChange={(e) => setNameVal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price of expense"
          className="px-3 py-2 text-lg rounded-lg"
          required
          value={priceVal}
          onChange={(e) => setPriceVal(e.target.value)}
        />
        <div className="flex justify-between gap-5">
          <select
            name="category"
            className="px-3 py-2 text-lg rounded-lg w-full"
            required
            value={categoryVal}
            onChange={(e) => setCategoryVal(e.target.value)}
          >
            <option value="Transport">Transport</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="px-10 py-2 text-lg rounded-lg bg-blue-600 transition hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
