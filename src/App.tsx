import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { Button } from "@material-ui/core";

import Form from "./components/Form";
import Game from "./components/Game";
import Stats from "./components/Stats";

const NUMBER_OF_PLAYERS = 5;

const App: React.FC = () => {
  const [playerArray, setPlayerArray] = useState<Player[]>(() =>
    JSON.parse(localStorage.getItem("playerArray") || "[]")
  );
  const [gameNumber, setGameNumber] = useState<number>(() =>
    JSON.parse(localStorage.getItem("gameNumber") || "1")
  );
  const [sortingOrder, setSortingOrder] = useState("bigPoints");

  useEffect(() => {
    localStorage.setItem("playerArray", JSON.stringify(playerArray));
    localStorage.setItem("gameNumber", JSON.stringify(gameNumber));
  }, [playerArray, gameNumber]);

  const removePlayerArrayFromLocalStorage = () => {
    let newPlayerArray = playerArray;
    newPlayerArray = [];
    setPlayerArray(newPlayerArray);
    let newGameNumber = gameNumber;
    newGameNumber = 1;
    setGameNumber(newGameNumber);
  };

  const savePlayerArrayToSate = (name: string) => {
    const newPlayer: Player = {
      id: Math.floor(Math.random() * Math.floor(5)),
      name: name.trim(),
      smallPoints: 0,
      bigPoints: 0
    };

    const arrayOfId = playerArray.map(player => player.id);

    do {
      newPlayer.id = Math.floor(Math.random() * Math.floor(5));
    } while (arrayOfId.includes(newPlayer.id));

    setPlayerArray([...playerArray, newPlayer]);
  };

  const sorterPlayerArray = playerArray.sort(function(a, b) {
    if (sortingOrder === "bigPoints") {
      return b.bigPoints - a.bigPoints;
    }
    if (sortingOrder === "smallPoints") {
      return b.smallPoints - a.smallPoints;
    }
    return b.id - a.id;
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "5px" }}>
        {playerArray.length < NUMBER_OF_PLAYERS ? (
          <Form savePlayerArrayToSate={savePlayerArrayToSate} />
        ) : (
          <Game
            playerArray={playerArray}
            setPlayerArray={setPlayerArray}
            gameNumber={gameNumber}
            setGameNumber={setGameNumber}
          />
        )}
        {playerArray.length ? (
          <>
            <Stats
              sorterPlayerArray={sorterPlayerArray}
              setSortingOrder={setSortingOrder}
            />
            <div style={{ position: "absolute", top: 15, right: 15 }}>
              <Button
                color="primary"
                onClick={() => {
                  if (window.confirm("Vai tiešām sākt jaunu turnīru?"))
                    removePlayerArrayFromLocalStorage();
                }}
              >
                JAUNS TURNĪRS
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </ThemeProvider>
  );
};

export default App;
