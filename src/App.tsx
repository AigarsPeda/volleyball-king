import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Form from "./components/Form";

const App: React.FC = () => {
  const [name1, setName1] = useState<string>("");
  const [name2, setName2] = useState<string>("");
  const [name3, setName3] = useState<string>("");
  const [name4, setName4] = useState<string>("");
  const [name5, setName5] = useState<string>("");

  const [playerArray, setPlayerArray] = useState<string[]>();

  const namesObj = { name1, name2, name3, name4, name5 };
  const setNamesObj = { setName1, setName2, setName3, setName4, setName5 };

  return (
    <ThemeProvider theme={theme}>
      {console.log(playerArray)}
      <Form namesObj={namesObj} setNamesObj={setNamesObj} />
    </ThemeProvider>
  );
};

export default App;
