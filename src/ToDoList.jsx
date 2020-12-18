import React from "react";
import ToDo from "./ToDo";
import styled from "styled-components";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      <Box>
        {toDoList.map((todo) => {
          return (
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          );
        })}
        <Button onClick={handleFilter}>Aktaulizuj!</Button>
      </Box>
    </div>
  );
};

export default ToDoList;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  background: "white";
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 10em;
`;
