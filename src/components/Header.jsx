import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

function Header() {
  const [paytm, setPaytm] = useState(false);
  const [money, setMoney] = useState(100);

  return (
    <div>
      <h1 className="text-4xl my-5 font-semibold underline">Expense Tracker</h1>
      <div
        className="flex justify-between px-5 pt-4"
        style={{ maxWidth: "500px" }}
      >
        <div className="text-3xl">Total Balance :</div>
        <div className="flex flex-col items-end">
          <div className="text-2xl flex items-center">
            <FaRupeeSign />
            <p>{money}</p>
          </div>
          <button
            type="button"
            className="bg-red-600 py-1 px-2 rounded-lg transition hover:bg-red-700 mt-3 whitespace-nowrap"
            onClick={() => setPaytm(true)}
          >
            Add Money
          </button>
        </div>
      </div>

      {paytm && (
        <div className="flex items-center justify-center">
          <form
            className="flex flex-col p-3 items-center gap-3 bg-slate-200 rounded-lg m-3 fixed top-10 w-full"
            style={{ maxWidth: "500px" }}
            onSubmit={() => setPaytm(false)}
          >
            <SiPaytm className="text-8xl text-sky-500" />
            <input
              type="number"
              placeholder="Enter Amount"
              className="p-3 text-xl rounded-lg"
              required
              value={money}
              onChange={(e) => setMoney(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="p-3 text-xl rounded-lg"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 text-xl rounded-lg bg-green-600 w-64 mb-5 transition hover:bg-green-700"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Header;
