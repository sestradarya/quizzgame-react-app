import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";

export const GamePage = () => {
  const [count, setCount] = useState(0);

  return (
    <Page>
      <Card />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
