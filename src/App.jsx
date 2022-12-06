import { useEffect, useState } from "react";
import Header from "./components/Header";
import uniqid from "uniqid";
import TodoList from "./components/TodoList";
import Info from "./components/Info";
import MobileInfo from "./components/MobileInfo";
import Completed from "./components/Completed";
import Active from "./components/Active";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [todoItem, setTodoItem] = useState("");
  const [status, setStatus] = useState([]);
  const [completeStatus, setCompletedStatus] = useState(false);
  const [showActive, setShowActive] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode((current) => !current);
  };

  const toggleListColor = darkMode
    ? "bg-midnight text-gray-300 border-b-gray-500 "
    : "bg-white ";

  const styles = {
    backgroundColor: darkMode ? "black" : "white",
  };

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(list));
  }, [list]);

  //when submit, takes value of our todItem state, and pushes it into an array
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (todoItem !== "") {
      let todoItems = {
        id: uniqid(),
        todo: todoItem,
        complete: false,
      };
      setList((current) => {
        return [...current, todoItems];
      });
      setTodoItem("");
    }
  };

  const completedItem = (id) => {
    let mapped = list.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setList(mapped);
  };

  const removeCompletedItems = () => {
    return setList((current) => {
      return current.filter((el) => el.complete !== true);
    });
  };

  const removeItems = (id) => {
    return setList((current) => {
      return current.filter((el) => el.id !== id);
    });
  };

  //will keep the last input and it set it equal to our todoItem
  const handleOnChange = (event) => {
    setTodoItem(event);
  };

  const displayTodoList = list?.map((item) => {
    return (
      <TodoList
        item={item}
        darkMode={darkMode}
        darkmode={toggleListColor}
        removeItem={removeItems}
        completed={completedItem}
      />
    );
  });

  const displayCompleted = status.map((completed) => {
    return (
      <Completed
        item={completed}
        darkMode={darkMode}
        darkmode={toggleListColor}
        removeItem={removeItems}
        completed={completedItem}
      />
    );
  });

  const displayActive = showActive.map((active) => {
    return (
      <Active
        item={active}
        darkMode={darkMode}
        darkmode={toggleListColor}
        removeItem={removeItems}
        completed={completedItem}
      />
    );
  });

  const toggleCompleted = () => {
    setActiveStatus(false);
    setCompletedStatus((current) => !current);
    setStatus((current) => {
      return list.filter((el) => el.complete == true);
    });
  };

  const toggleActive = () => {
    setActiveStatus((current) => !current);
    setCompletedStatus(false);
    setShowActive((current) => {
      return list.filter((el) => el.complete == false);
    });
  };

  const toggleAll = () => {
    setCompletedStatus(false);
    setActiveStatus(false);
  };

  return (
    <div style={styles} className="h-screen  w-full flex flex-col">
      <div className="background flex flex-col ">
        <Header
          mode={toggleDarkMode}
          darkmode={toggleListColor}
          handleSubmit={handleOnSubmit}
          handleChange={handleOnChange}
          todoItem={todoItem}
          darkMode={darkMode}
        />

        <div className="self-center lg:w-1/2 item w-5/6 shadow-lg ">
          {!completeStatus && !activeStatus && displayTodoList}
          {completeStatus && displayCompleted}
          {activeStatus && displayActive}
          {list.length > 0 ? (
            <Info
              darkmode={toggleListColor}
              removeComplete={removeCompletedItems}
              items={list}
              status={toggleCompleted}
              active={toggleActive}
              all={toggleAll}
              completeStatus={completeStatus}
              activeStatus={activeStatus}
              complete={status}
            />
          ) : null}
        </div>
        <div className="self-center lg:w-1/2 item w-5/6 shadow-lg mt-3">
          {list.length > 0 && (
            <MobileInfo
              darkmode={toggleListColor}
              removeComplete={removeCompletedItems}
              items={list}
              status={toggleCompleted}
              active={toggleActive}
              all={toggleAll}
              completeStatus={completeStatus}
              activeStatus={activeStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
