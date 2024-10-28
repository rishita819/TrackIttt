import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../store/expense";

function ShowExpense() {
  const expense = useSelector((store) => store.expense);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <>
      {expense.length > 0 ? (
        <div style={{ maxWidth: "500px" }} className="p-5">
          <h2 className="text-end text-red-500 underline text-xl">
            Expenses History
          </h2>
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-5">
            <thead className="bg-gray-200 text-gray-600 font-semibold text-xl">
              <tr>
                <td className="px-3 py-3">Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Delete</td>
              </tr>
            </thead>

            {expense.map((item) => (
              <ExpenseItem key={item.id} item={item} ondelete={handleDelete} />
            ))}
          </table>
        </div>
      ) : (
        <p className="text-xl mt-5">No Expense Here!</p>
      )}
    </>
  );
}

export default ShowExpense;
