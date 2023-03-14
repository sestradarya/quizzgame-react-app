import React from "react";
import styled from "styled-components";
import { CategoryBtn } from "../components/CategoryBtn";

export const CategoryPage = (props) => {
  return (
    <Page>
      <Section>
        <p>Choose Category:</p>
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Science: Computers"
        />
        <CategoryBtn onHandleClick={props.playingGame} value="Sports" />
        <CategoryBtn onHandleClick={props.playingGame} value="History" />
        <CategoryBtn onHandleClick={props.playingGame} value="Animals" />
        <CategoryBtn onHandleClick={props.playingGame} value="Art" />
        <CategoryBtn onHandleClick={props.playingGame} value="Politics" />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Books"
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Film"
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Music"
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Television"
        />
      </Section>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Section = styled.div`
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 86%;
  height: 90%;
  max-width: 380px;
  border-radius: 20px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;
  overflow: auto;

  p{
    font-size: 1.5rem;
    text-align: center;
    color: #191919;
  }
`;
