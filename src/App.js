import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import data from "./data.json";

import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import styled from "styled-components";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ToDoForm addTask={addTask} />
      <Form>
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
      </Form>
    </div>
  );
}

export default App;

const Form = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-width: 4px;
  border-style: solid;
  border-color: black;
`;
