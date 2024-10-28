import React from "react";
import { MdDelete } from "react-icons/md";

function ExpenseItem({ item, ondelete }) {
  const date = new Date().toLocaleDateString();

  return (
    <>
      <tbody className="text-black text-xl font-semibold">
        <tr className="border-b">
          <td className="px-3 py-4 relative ">
            {item.name}{" "}
            <span className="text-xs text-gray-600 absolute bottom-0 left-3">
              {date}
            </span>
          </td>

          <td>{item.category}</td>
          <td>₹ {item.price}</td>
          <td>
            <MdDelete
              className="text-red-500 transition hover:text-red-700 cursor-pointer"
              onClick={() => ondelete(item.id)}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default ExpenseItem;
