import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
// import { Button } from "@material-ui/core";
import Form from "./components/Form";

const App: React.FC = () => {
  const [showingEditButton, setShowingEditButton] = useState(false);
  const [playerArray, setPlayerArray] = useState<Player[]>();

  const savePlayerArrayToSate = (newArray: Player[]) => {
    setPlayerArray([...newArray]);
    setShowingEditButton(true);
  };

  return (
    <ThemeProvider theme={theme}>
      {console.log(playerArray)}
      {console.log(showingEditButton)}

      <Form savePlayerArrayToSate={savePlayerArrayToSate} />
    </ThemeProvider>
  );
};

export default App;
