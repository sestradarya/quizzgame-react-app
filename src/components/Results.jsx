import React from "react";
import styled from "styled-components";

export const Results = (props) => {
  return (
    <Section>
      <div>Your Result: {props.result}/10</div>
    </Section>
  );
};

const Section = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  width: 100%;
  max-width: 420px;

  div {
    background-color: white;
    background-image: url('https://media.istockphoto.com/id/905483648/vector/falling-confetti-with-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=RdGDi0TimxVwwoPj4ekrYg6HVvfFa9DnBBSHXcCb8mA=');
    background-size: cover;

    border-radius: 20px;
    padding: 5rem 2rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;
    margin: 0 auto;
  }
`;
