import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";

export const GamePage = (props) => {
  return (
    <Page>
      <Card endGame = {props.endGame}/>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
