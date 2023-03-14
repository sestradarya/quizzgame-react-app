import React from "react";
import styled from "styled-components";

export const CategoryBtn = (props) => {
  return <Button onClick={props.onHandleClick}>{props.value}</Button>;
};

const Button = styled.button`
  width: 85%;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  border-color: white;
  border-radius: 30px;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  outline: white;
  margin: 0 auto;
  margin-bottom: 1.2rem;
  background-color: #494974;
  color: white;

  transition: all 0.3s;

  :hover {
    width: 95%;
    border-color: #2e2d78;
    font-size: 1.1rem;
  }

  :active {
    background-color: gray;
  }
`;
