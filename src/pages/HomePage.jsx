import React from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";

export const HomePage = (props) => {
  return (
    <Page>
      <Logo></Logo>
      <Button onHandleClick={props.startGame} caption="Start playing" />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
