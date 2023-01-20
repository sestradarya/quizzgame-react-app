import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import styled from "styled-components";
import { useState } from "react";
import { ResultsPage } from "./pages/ResultsPage";
import { CounterContext } from "./context/CounterContext";

function App() {
  const [gameProgress, setgameProgress] = useState("not started");
  const [count, setCount] = useState(0)

  function endGame() {
    setgameProgress("ended");
  }
  function startGame() {
    setgameProgress("started");
    setCount(0)
  }
  function increaseCount(){
    setCount(prev => prev+1)
  }

  return (
    <CounterContext.Provider value={{count, increaseCount}}>
      <Container>
      {gameProgress === "not started" ? (
        <HomePage startGame={startGame} />
      ) : gameProgress === "started" ? (
        <GamePage endGame={endGame} />
      ) : (
        <ResultsPage startGame={startGame} result={count}/>
      )}
    </Container>
    </CounterContext.Provider>
    
  );
}

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
  height: 100vh;
  margin: 0vh auto;
  padding: 0;
  background-image: url('https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg');
  background-repeat: no-repeat;
  background-size: cover
`;

export default App;
