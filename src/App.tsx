import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Form from "./components/Form";

const App: React.FC = () => {
  const [showingForm, setShowingForm] = useState(true);
  const [playerArray, setPlayerArray] = useState<Player[]>();

  const savePlayerArrayToSate = (newArray: Player[]) => {
    setPlayerArray([...newArray]);
    setShowingForm(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {console.log(playerArray)}
      {showingForm && <Form savePlayerArrayToSate={savePlayerArrayToSate} />}
    </ThemeProvider>
  );
};

export default App;
