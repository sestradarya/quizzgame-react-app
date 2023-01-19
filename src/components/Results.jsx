import React from "react";
import styled from "styled-components";

export const Results = () => {
  return (
    <Section>
      <div>Your Result: {"5 / 10"}</div>
    </Section>
  );
};

const Section = styled.div`
  flex: 0 1 80%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  width: 86%;
  max-width: 420px;

  div {
    background-color: white;
    background-color: white;

    border-radius: 20px;
    padding: 5rem 2rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;
    margin: 0 auto;
  }
`;
