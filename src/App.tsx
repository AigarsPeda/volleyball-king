import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { Button, Switch } from "@material-ui/core";

import Form from "./components/Form";
import Game from "./components/Game";
import Stats from "./components/Stats";
import TournamentEnd from "./components/TournamentEnd";
import PlayerCountSelect from "./components/PlayerCountSelect";

import { languagesText } from "./data/language";

const App: React.FC = () => {
  const [playerArray, setPlayerArray] = useState<Player[]>(() =>
    JSON.parse(localStorage.getItem("playerArray") || "[]")
  );
  const [gameNumber, setGameNumber] = useState<number>(() =>
    JSON.parse(localStorage.getItem("gameNumber") || "1")
  );
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(() =>
    JSON.parse(localStorage.getItem("numberOfPlayers") || "0")
  );
  const [language, setLanguage] = useState<Lang>(() =>
    JSON.parse(localStorage.getItem("language") || "{checkedENG: false}")
  );

  const [sortingOrder, setSortingOrder] = useState("bigPoints");
  const [playerToEdit, setPlayerToEdit] = useState<Player>();
  const [openEditPlayer, setOpenEditPlayer] = useState(false);

  useEffect(() => {
    localStorage.setItem("playerArray", JSON.stringify(playerArray));
    localStorage.setItem("gameNumber", JSON.stringify(gameNumber));
    localStorage.setItem("numberOfPlayers", JSON.stringify(numberOfPlayers));
    localStorage.setItem("language", JSON.stringify(language));
  }, [playerArray, gameNumber, numberOfPlayers, language]);

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

  const editPlayerName = (id: number) => {
    const newPlayer = playerArray.find(player => player.id === id);
    setPlayerToEdit(newPlayer);
  };

  const saveNewPlayerName = (playerToEdit: Player, newName: string) => {
    const newPlayerArray = playerArray.map(player => {
      if (player.id === playerToEdit.id) {
        return {
          ...player,
          name: newName
        };
      }
      return player;
    });
    setPlayerArray(newPlayerArray);
  };

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLanguage({ ...language, [name]: event.target.checked });
  };

  if (numberOfPlayers === 0) {
    return (
      <ThemeProvider theme={theme}>
        {console.log(language)}
        <Switch
          checked={language.checkedENG}
          onChange={handleChange("checkedENG")}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <PlayerCountSelect
          language={language}
          numberOfPlayers={numberOfPlayers}
          setNumberOfPlayers={setNumberOfPlayers}
        />
      </ThemeProvider>
    );
  }

  if (
    (gameNumber === 16 && numberOfPlayers === 5) ||
    (gameNumber === 10 && numberOfPlayers === 4)
  ) {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ padding: "5px" }}>
          <TournamentEnd
            language={language}
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
          <Form
            savePlayerArrayToSate={savePlayerArrayToSate}
            language={language}
          />
        ) : (
          <Game
            language={language}
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
              {language.checkedENG
                ? languagesText.eng.buttonBack
                : languagesText.lv.buttonBack}
            </Button>
          </div>
        )}
        {playerArray.length ? (
          <>
            <Stats
              sorterPlayerArray={sorterPlayerArray}
              setSortingOrder={setSortingOrder}
              editPlayerName={editPlayerName}
              playerToEdit={playerToEdit}
              saveNewPlayerName={saveNewPlayerName}
              gameNumber={gameNumber}
              openEditPlayer={openEditPlayer}
              setOpenEditPlayer={setOpenEditPlayer}
              language={language}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              {!openEditPlayer && (
                <Button
                  style={{ color: "rgba(232,48,58,1)" }}
                  onClick={() => {
                    if (
                      window.confirm(
                        language.checkedENG
                          ? languagesText.eng.newTournamentsConfirm
                          : languagesText.lv.newTournamentsConfirm
                      )
                    )
                      removePlayerArrayFromLocalStorage();
                  }}
                >
                  {language.checkedENG
                    ? languagesText.eng.newTournaments
                    : languagesText.lv.newTournaments}
                </Button>
              )}
            </div>
          </>
        ) : null}
      </div>
    </ThemeProvider>
  );
};

export default App;
