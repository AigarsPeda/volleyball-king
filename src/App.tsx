import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
// import { Button } from "@material-ui/core";
import Form from "./components/Form";
import Game from "./components/Game";

const NUMBER_OF_PLAYERS = 5;

const App: React.FC = () => {
  const [playerArray, setPlayerArray] = useState<Player[]>(() =>
    JSON.parse(localStorage.getItem("playerArray") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("playerArray", JSON.stringify(playerArray));
  }, [playerArray]);

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

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "5px" }}>
        {console.log(playerArray)}
        {playerArray?.length < NUMBER_OF_PLAYERS ? (
          <Form savePlayerArrayToSate={savePlayerArrayToSate} />
        ) : (
          <Game playerArray={playerArray} setPlayerArray={setPlayerArray} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
