import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { Button } from "@material-ui/core";

import Form from "./components/Form";
import Game from "./components/Game";
import Stats from "./components/Stats";
import TournamentEnd from "./components/TournamentEnd";
import PlayerCountSelect from "./components/PlayerCountSelect";

const App: React.FC = () => {
  const [playerArray, setPlayerArray] = useState<Player[]>(() =>
    JSON.parse(localStorage.getItem("playerArray") || "[]")
  );
  const [gameNumber, setGameNumber] = useState<number>(() =>
    JSON.parse(localStorage.getItem("gameNumber") || "1")
  );
  const [sortingOrder, setSortingOrder] = useState("bigPoints");
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(() =>
    JSON.parse(localStorage.getItem("numberOfPlayers") || "0")
  );

  useEffect(() => {
    localStorage.setItem("playerArray", JSON.stringify(playerArray));
    localStorage.setItem("gameNumber", JSON.stringify(gameNumber));
    localStorage.setItem("numberOfPlayers", JSON.stringify(numberOfPlayers));
  }, [playerArray, gameNumber, numberOfPlayers]);

  const removePlayerArrayFromLocalStorage = () => {
    let newPlayerArray = playerArray;
    newPlayerArray = [];
    setPlayerArray(newPlayerArray);
    let newGameNumber = gameNumber;
    newGameNumber = 1;
    setGameNumber(newGameNumber);
    let newNumberOfPlayers = numberOfPlayers;
    newNumberOfPlayers = 0;
    setNumberOfPlayers(newNumberOfPlayers);
  };

  const savePlayerArrayToSate = (name: string) => {
    const newPlayer: Player = {
      id: Math.floor(Math.random() * Math.floor(numberOfPlayers)),
      name: name.trim(),
      smallPoints: 0,
      bigPoints: 0
    };

    const arrayOfId = playerArray.map(player => player.id);

    do {
      newPlayer.id = Math.floor(Math.random() * Math.floor(numberOfPlayers));
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

  console.log(playerArray);

  if (numberOfPlayers === 0) {
    return (
      <ThemeProvider theme={theme}>
        <PlayerCountSelect
          numberOfPlayers={numberOfPlayers}
          setNumberOfPlayers={setNumberOfPlayers}
        />
      </ThemeProvider>
    );
  }

  console.log(numberOfPlayers);

  if (
    (gameNumber === 16 && numberOfPlayers === 5) ||
    (gameNumber === 10 && numberOfPlayers === 4)
  ) {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ padding: "5px" }}>
          <TournamentEnd
            sorterPlayerArray={sorterPlayerArray}
            setSortingOrder={setSortingOrder}
            removePlayerArrayFromLocalStorage={
              removePlayerArrayFromLocalStorage
            }
          />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "5px" }}>
        {playerArray.length < numberOfPlayers ? (
          <Form savePlayerArrayToSate={savePlayerArrayToSate} />
        ) : (
          <Game
            playerArray={playerArray}
            setPlayerArray={setPlayerArray}
            gameNumber={gameNumber}
            setGameNumber={setGameNumber}
            numberOfPlayers={numberOfPlayers}
          />
        )}
        {!playerArray.length && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={removePlayerArrayFromLocalStorage}
              style={{ color: "rgba(232,48,58,1)" }}
            >
              Atpakaļ
            </Button>
          </div>
        )}
        {playerArray.length ? (
          <>
            <Stats
              sorterPlayerArray={sorterPlayerArray}
              setSortingOrder={setSortingOrder}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{ color: "rgba(232,48,58,1)" }}
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
