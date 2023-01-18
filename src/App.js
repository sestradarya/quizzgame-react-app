import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GamePage></GamePage>
    </Container>
  );
}

const Container = styled.div`
  
`;

export default App;
