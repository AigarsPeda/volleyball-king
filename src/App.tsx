import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
// import { Button } from "@material-ui/core";
import Form from "./components/Form";

const NUMBER_OF_PLAYERS = 5;

const App: React.FC = () => {
  const [playerArray, setPlayerArray] = useState<Player[]>([]);

  const savePlayerArrayToSate = (name: string) => {
    const newPlayer: Player = {
      id: 1,
      name: name,
      smallPoints: 0,
      bigPoints: 0
    };
    setPlayerArray([...playerArray, newPlayer]);
  };

  return (
    <ThemeProvider theme={theme}>
      {console.log(playerArray)}
      {playerArray?.length < NUMBER_OF_PLAYERS ? (
        <Form savePlayerArrayToSate={savePlayerArrayToSate} />
      ) : (
        <h2>Tabula</h2>
      )}
    </ThemeProvider>
  );
};

export default App;
