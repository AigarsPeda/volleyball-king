import React from "react";

import { Button, Grid } from "@material-ui/core";

import Stats from "./Stats";

interface ITournamentEnd {
  sorterPlayerArray: Player[];
  setSortingOrder: React.Dispatch<React.SetStateAction<string>>;
  removePlayerArrayFromLocalStorage: () => void;
}

const TournamentEnd: React.FC<ITournamentEnd> = props => {
  const {
    sorterPlayerArray,
    setSortingOrder,
    removePlayerArrayFromLocalStorage
  } = props;
  return (
    <Grid container justify="center">
      <h1 style={{ fontSize: "45px", color: "#fff" }}>Turnīrs Beidzies!</h1>
      <Stats
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
            if (window.confirm("Vai tiešām sākt jaunu turnīru?"))
              removePlayerArrayFromLocalStorage();
          }}
        >
          SĀKT JAUNU TŪRNĪRU
        </Button>
      </div>
    </Grid>
  );
};

export default TournamentEnd;
