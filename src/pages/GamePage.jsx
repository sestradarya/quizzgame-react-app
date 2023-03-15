import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { CategoryContext } from "../context/CategoryContext";

export const GamePage = (props) => {
  return (
    <CategoryContext.Consumer>
      {({ category }) => (
        <Page>
          <Card endGame={props.endGame} category={category}/>
        </Page>
      )}
    </CategoryContext.Consumer>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
