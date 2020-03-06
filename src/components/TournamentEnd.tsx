import React from "react";

import { Button, Grid } from "@material-ui/core";

import Stats from "./Stats";

import { languagesText } from "../data/language";

interface ITournamentEnd {
  sorterPlayerArray: Player[];
  setSortingOrder: React.Dispatch<React.SetStateAction<string>>;
  removePlayerArrayFromLocalStorage: () => void;
  language: Lang;
}

const TournamentEnd: React.FC<ITournamentEnd> = props => {
  const {
    sorterPlayerArray,
    setSortingOrder,
    removePlayerArrayFromLocalStorage,
    language
  } = props;
  return (
    <Grid container justify="center">
      <h1 style={{ fontSize: "45px", color: "#fff" }}>
        {language.checkedENG
          ? languagesText.eng.tournamentEnd
          : languagesText.lv.tournamentEnd}
      </h1>
      <Stats
        language={language}
        sorterPlayerArray={sorterPlayerArray}
        setSortingOrder={setSortingOrder}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          //color="primary"
          style={{
            marginTop: "10px",
            color: "rgba(232,48,58,1)",
            fontSize: "25px",
            letterSpacing: "2px"
          }}
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
      </div>
    </Grid>
  );
};

export default TournamentEnd;
