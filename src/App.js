import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ResultsPage } from "./pages/ResultsPage";
import { CategoryPage } from "./pages/CategoryPage";
import { CounterContext } from "./context/CounterContext";
import { CategoryContext } from "./context/CategoryContext";

function App() {
  const [gameProgress, setgameProgress] = useState("not started");
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState('');

  function endGame() {
    setgameProgress("ended");
  }
  function startGame() {
    setgameProgress("started");
    setCount(0);
  }
  function playingGame() {
    setgameProgress("in progress");
  }
  function exitGame(){
    setgameProgress('not started')
  }
  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  function changeCategory(id){
    setCategory(id);
  }



  return (
    <CategoryContext.Provider value={{category, changeCategory}}>
      <CounterContext.Provider value={{ count, increaseCount }}>
        <Container>
          {gameProgress === "not started" ? (
            <HomePage startGame={startGame} />
          ) : gameProgress === "started" ? (
            <CategoryPage playingGame={playingGame} exitGame={exitGame}/>
          ) : gameProgress === "in progress" ? (
            <GamePage endGame={endGame} />
          ) : (
            <ResultsPage startGame={startGame} playingGame={playingGame} exitGame={exitGame} result={count} />
          )}
        </Container>
      </CounterContext.Provider>
    </CategoryContext.Provider>
  );
}

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
  height: 100vh;
  margin: 0vh auto;
  padding: 0;
  background-image: url("https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export default App;
