import React, { useState } from "react";
import styled from "styled-components";
import { CounterContext } from "../context/CounterContext";

export const AnswerBtn = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const selectAnswer = () => {
    if (props.isCorrect) {
      setBackgroundColor("#AACB73");
    } else {
      setBackgroundColor("#F55050");
    }
    setTimeout(() => {
      props.onHandleClick();
      setBackgroundColor("transparent");
    }, 1000);
    
  };

  return (
    <CounterContext.Consumer>
      {({ count, increaseCount }) => (
        <Button
          onClick={() => {
            if(props.isCorrect){
                increaseCount()
            }
            selectAnswer()}}
          style={{ backgroundColor: backgroundColor }}
        >
          {props.value}
        </Button>
      )}
    </CounterContext.Consumer>
  );
};

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border-color: white;
  border-radius: 30px;
  border-color: gray;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  outline: white;
  margin-bottom: 1.2rem;
  background-color: transparent;

  :hover {
    background-color: #b8b8b8;
  }

  :active {
    background-color: gray;
  }
`;
