import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleInputTodo = (event) => {
    let inputValue = event.target.value;
    setTodo(inputValue);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (todo) {
      setItemsList([...itemsList, todo]);
      document.querySelector("#textToDo").value = "";
      setTodo("");
    }
  };

  const onItemFinished = (index) => {
    const filteredItems = itemsList.filter(
      (itemCurrent) => itemsList.indexOf(itemCurrent) !== index
    );

    setItemsList(filteredItems);
  };

  return (
    <div className="App">
      <h2>ToDo List</h2>
      <header className="App-header">
        <form>
          <input
            type="text"
            placeholder="ToDo Title"
            id="textToDo"
            onChange={handleInputTodo}
          />
          <button
            type="submit"
            className="App-link"
            title="Add"
            onClick={addItem}
          >
            +
          </button>
        </form>
      </header>
      <main>
        <ul>
          {itemsList.map((item, index) => (
            <li key={index} onClick={() => onItemFinished(index)}>
              {item}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
