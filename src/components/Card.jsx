import React from "react";
import styled from "styled-components";

export const Card = () => {
  return (
    <Section>
      <div className="head-panel">
        <div className="question-number">1/10</div>
      </div>
      <div className="category">Technology</div>
      <div className="question">
        What was the first product launched by Apple?
      </div>
      <div className="answers">
        <button>iPhone</button>
        <button>iPad</button>
        <button>Apple 1</button>
        <button>iPod</button>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 86%;
  border-radius: 20px;
  padding: 1rem;
  box-sizing: border-box;

  .question-number{
    font-size: 1rem;
    padding-bottom: 3rem;
  }

  .category {
    color: gray;
    font-size: .9rem;
    padding-top: 1rem;
    text-align: center;
  }

  .question{
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    color: black;
    padding: .5rem 1rem 2rem 1rem;
  }

  .answers{
    display: flex;
    flex-direction: column;
  }

  .answers button{
    width: 100%;
    padding: .8rem;
    font-size: 1rem;
    border-radius: 30px;
    margin-bottom: 1.2rem;
    background-color: transparent;
  }

`;
