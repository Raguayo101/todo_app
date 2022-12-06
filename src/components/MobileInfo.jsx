import React from "react";

export default function MobileInfo({
  all,
  darkmode,
  status,
  statusColor,
  active,
  completeStatus,
  activeStatus,
}) {
  const toggleText = completeStatus ? "text-blue-500 font-bold" : "";
  const toggleActiveText = activeStatus ? "text-blue-500 font-bold" : "";
  const toggleAll =
    !completeStatus && !activeStatus ? "text-blue-500 font-bold" : "";

  return (
    <div
      className={`sm:hidden justify-between first:rounded-t-lg last:rounded-b-lg w-full flex p-4 border-b-gray-300 border-b ${darkmode}`}
    >
      <button onClick={all} className={`${toggleAll}`}>
        All
      </button>
      <button onClick={active} className={`${toggleActiveText}`}>
        Active
      </button>
      <button onClick={status} className={`${toggleText}`}>
        Completed
      </button>
    </div>
  );
}
