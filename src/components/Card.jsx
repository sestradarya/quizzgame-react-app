import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Card = (props) => {
  const [data, setData] = useState({});
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(0)
    fetchData()
    console.log("newCard");
  }, []);

  useEffect(() => {
    if(number === 11){
        props.endGame()
    }
  }, [number])

  const fetchData = async () => {
    const result = await fetch("https://opentdb.com/api.php?amount=1");
    const data = await result.json();
    setData(data.results[0]);
    if(data) setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    
  }, [data]);

  return (
    <Section>
      <div className="head-panel">
        <div className="question-number">{number}/10</div>
      </div>
      <div className="category">{data.category}</div>
      <div className="question">{data.question}</div>
      <div className="answers">
        {data.incorrect_answers?.map((answer) => {
          return <button onClick={fetchData}>{answer}</button>;
        })}
        <button>{data.correct_answer}</button>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 86%;
  max-width: 420px;
  border-radius: 20px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;

  .question-number {
    font-size: 1rem;
    padding-bottom: 3rem;
  }

  .category {
    color: gray;
    font-size: 0.9rem;
    padding-top: 1rem;
    text-align: center;
  }

  .question {
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    color: black;
    padding: 0.5rem 1rem 2rem 1rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
  }

  .answers button {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border-color: white;
    border-radius: 30px;
    border-color: gray;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    outline: white;
    margin-bottom: 1.2rem;
    background-color: transparent;
  }
`;
