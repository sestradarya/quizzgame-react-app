import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Results } from "../components/Results";

export const ResultsPage = (props) => {
  return (
    <Page>
      <Results result={props.result} />
      <div className="buttons">
        <Button onHandleClick={props.playingGame} caption="Continue playing" />
        <Button
          onHandleClick={props.startGame}
          caption="Another category"
        />
        <Button onHandleClick={props.exitGame} caption="Exit game" />
      </div>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-bottom: 1rem;
    width: 18rem;
  }
`;
