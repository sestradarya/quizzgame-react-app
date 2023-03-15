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
          value="Mixed"
          id=''
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Science: Computers"
          id='18'
        />
        <CategoryBtn onHandleClick={props.playingGame} value="Sports" id='21'/>
        <CategoryBtn onHandleClick={props.playingGame} value="History" id='23'/>
        <CategoryBtn onHandleClick={props.playingGame} value="Animals" id='27'/>
        <CategoryBtn onHandleClick={props.playingGame} value="Art" id='25'/>
        <CategoryBtn onHandleClick={props.playingGame} value="Politics" id='24'/>
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Books"
          id='10'
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Film"
          id='11'
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Music"
          id='12'
        />
        <CategoryBtn
          onHandleClick={props.playingGame}
          value="Entertainment: Television"
          id='14'
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
  padding: .3rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 86%;
  height: 90%;
  max-width: 380px;
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #7c7c7c;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    color: #191919;
  }
`;
