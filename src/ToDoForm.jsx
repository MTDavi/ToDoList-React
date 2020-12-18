import React, { useState } from "react";
import styled from "styled-components";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Wprowadź zadanie.."
        />
        <button>Dodaj!</button>
      </Container>
    </form>
  );
};

export default ToDoForm;

const Container = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-bottom: 5px;
  border-width: 4px;
  border-style: solid;
  border-color: black;
`;
