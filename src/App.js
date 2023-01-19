import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import styled from "styled-components";
import { useState } from "react";
import { ResultsPage } from "./pages/ResultsPage";

function App() {
  const [gameProgress, setgameProgress] = useState("not started");
  function endGame() {
    setgameProgress("ended");
  }
  function startGame() {
    setgameProgress("started");
  }

  return (
    <Container>
      {gameProgress === "not started" ? (
        <HomePage startGame={startGame} />
      ) : gameProgress === "started" ? (
        <GamePage endGame={endGame} />
      ) : (
        <ResultsPage startGame={startGame}/>
      )}
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  margin: 0vh auto;
  padding: 0;
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default App;
