import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnswerBtn } from "./AnswerBtn";

export const Card = (props) => {
  const [data, setData] = useState({});
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(0);
    fetchData();
    console.log("newCard");
  }, []);

  useEffect(() => {
    if (number === 11) {
      props.endGame();
    }
  }, [number]);

  const fetchData = async () => {
    const result = await fetch("https://opentdb.com/api.php?amount=1");
    const data = await result.json();
    setData(data.results[0]);
    if (data) setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getQuestions = () => {
    if (data.incorrect_answers) {
      const arr = data.incorrect_answers.map((answer) => {
        return { value: answer, isCorrect: false };
      });
      const randomNumber = Math.random() * 3;
      arr.splice(randomNumber, 0, {
        value: data.correct_answer,
        isCorrect: true,
      });
      console.log(arr);
      return arr;
    }
  };

  const replaceEntities = (str) => {
    if (str) {
      return str.replaceAll("&quot;", '"').replaceAll('&#039;', "'")
      .replaceAll("&ouml;", "ö").replaceAll("&amp;", "&").replaceAll("&eacute;", "É");
    }
  };

  return (
    <Section>
      <div className="head-panel">
        <div className="question-number">{number}/10</div>
      </div>
      <div className="category">{data.category}</div>
      <div className="question">{replaceEntities(data.question)}</div>
      <div className="answers">
        {getQuestions()?.map((answer) => {
          return (
            <AnswerBtn
              value={replaceEntities(answer.value)}
              onHandleClick={fetchData}
              isCorrect={answer.isCorrect}
            />
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 86%;
  max-width: 380px;
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
    font-weight: 600;
    text-align: center;
    color: #303030;
    padding: 0.5rem 1rem 2rem 1rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
  }
`;
