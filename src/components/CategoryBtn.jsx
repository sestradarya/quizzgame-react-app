import React from "react";
import styled from "styled-components";
import { CategoryContext } from "../context/CategoryContext";

export const CategoryBtn = (props) => {


  return(
  <CategoryContext.Consumer>
    {({category, changeCategory}) => (
      <Button onClick={() => {changeCategory(props.id); console.log(category); props.onHandleClick(); }} data-id={props.id}>
      {props.value}
    </Button>
    )}
  </CategoryContext.Consumer>)
};

const Button = styled.button`
  width: 85%;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  border-color: white;
  border-radius: 5px;
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
    background-color: #d51964;
    font-size: 1.1rem;
  }

  :active {
    background-color: #d51964;
  }
`;
