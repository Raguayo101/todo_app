import React from "react";

export default function Info({
  active,
  darkmode,
  removeComplete,
  items,
  status,
  all,
  completeStatus,
  activeStatus,
  complete,
}) {
  const toggleCompleteText = completeStatus ? "text-blue-500 font-bold" : "";
  const toggleActiveText = activeStatus ? "text-blue-500 font-bold" : "";
  const toggleAll =
    !completeStatus && !activeStatus ? "text-blue-500 font-bold" : "";

  return (
    <div
      className={`justify-between first:rounded-t-lg last:rounded-b-lg w-full flex p-4 border-b-gray-300 border-b ${darkmode}`}
    >
      <p className="">{items.length} items</p>
      <div className=" hidden justify-between sm:w-1/3 sm:flex w-full">
        <button onClick={all} className={`${toggleAll}`}>
          All
        </button>
        <button onClick={active} className={`${toggleActiveText}`}>
          Active
        </button>
        <button onClick={status} className={`${toggleCompleteText}`}>
          Completed
        </button>
      </div>
      <button onClick={removeComplete}>Clear Completed</button>
    </div>
  );
}
