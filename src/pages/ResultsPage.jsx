import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Results } from "../components/Results";

export const ResultsPage = (props) => {
  return (
    <Page>
      <Results />
      <Button onHandleClick={props.startGame} caption="Continue playing" />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
