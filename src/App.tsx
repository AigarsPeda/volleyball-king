import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
// import { Button } from "@material-ui/core";
import Form from "./components/Form";
import Game from "./components/Game";

const NUMBER_OF_PLAYERS = 5;

const App: React.FC = () => {
  const [playerArray, setPlayerArray] = useState<Player[]>([]);

  const savePlayerArrayToSate = (name: string) => {
    const newPlayer: Player = {
      id: Math.floor(Math.random() * Math.floor(5)),
      name: name,
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
          <h2>Tabula</h2>
        )}
        <Game playerArray={playerArray} />
      </div>
    </ThemeProvider>
  );
};

export default App;
