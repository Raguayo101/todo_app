import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function Active({ item, darkmode, removeItem, completed }) {
  const lineThrough = item.complete ? "line-through text-grey" : "";

  return (
    <div
      className={`self-center first:rounded-t-lg last:rounded-b-lg w-full flex p-4 border-b-gray-300 border-b ${darkmode}`}
    >
      <button
        onClick={() => completed(item.id)}
        className={`text-gray-300 hover:text-rainbow `}
      >
        <FontAwesomeIcon icon={faCircle} size="xl" />
      </button>
      <p className={`w-full ml-2 ${lineThrough}`}>{item.todo}</p>
      <button onClick={() => removeItem(item.id)} className="self-end">
        X
      </button>
    </div>
  );
}
