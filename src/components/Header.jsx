import React from "react";
import { ReactComponent as Moon } from "../images/icon-moon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as Sun } from "../images/icon-sun.svg";

export default function Header({
  darkmode,
  mode,
  handleSubmit,
  handleChange,
  todoItem,
  darkMode,
}) {
  const toggleIcon = darkMode ? <Sun /> : <Moon />;

  return (
    <div
      className={` w-full justify-center items-center flex flex-col mt-40 mb-5`}
    >
      <div className="lg:w-1/2 item w-5/6 ">
        <header className="flex justify-between">
          <p className="font-bold text-white text-3xl tracking-widest">TODO</p>
          <button onClick={mode}>{toggleIcon}</button>
        </header>

        <form
          onSubmit={handleSubmit}
          className={`self-center mt-10 w-full flex rounded-md p-4 shadow-lg  ${darkmode}`}
        >
          <button type="submit" className="text-gray-300">
            <FontAwesomeIcon icon={faCircle} />
          </button>
          <input
            className={`w-full ml-2 ${darkmode}`}
            type="text"
            name="listItem"
            placeholder="Create a new todo..."
            value={todoItem}
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
