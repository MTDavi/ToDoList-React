import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Header = () => {
  return (
    <>
      <Rotate>
        <Heading>
          <p>To Do List</p>
        </Heading>
      </Rotate>
    </>
  );
};

export default Header;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: black;
  text-transform: uppercase;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: flex;
  justify-content: center;
  animation: ${rotate} 3s linear;
  padding: 5px;
  font-size: 1.6rem;
`;
