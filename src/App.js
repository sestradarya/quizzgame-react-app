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
  box-sizing: border-box;
  height: 100vh;
  margin: 0vh auto;
  padding: 0;
  background: #c94b4b;
  background: -webkit-linear-gradient(to right, #4b134f, #c94b4b);
  background: linear-gradient(to right, #4b134f, #c94b4b);
  
`;

export default App;
