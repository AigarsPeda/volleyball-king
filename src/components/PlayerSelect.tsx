import React from "react";
import PlayerCountSelect from "./PlayerCountSelect";
import { Switch } from "@material-ui/core";

interface IPlayerSelect {
  language: Lang;
  numberOfPlayers: number;
  setNumberOfPlayers: React.Dispatch<number>;
  handleChange: (
    name: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedENG: boolean;
}

const PlayerSelect: React.FC<IPlayerSelect> = props => {
  const {
    language,
    numberOfPlayers,
    setNumberOfPlayers,
    handleChange,
    checkedENG
  } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          textAlign: "center",
          padding: "7px"
        }}
      >
        <Switch
          checked={checkedENG}
          onChange={handleChange("checkedENG")}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <h2
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            paddingLeft: "10px",
            paddingRight: "10px",
            color: "#fff"
          }}
        >
          {language.checkedENG ? "LV" : "ENG"}
        </h2>
      </div>
      <PlayerCountSelect
        language={language}
        numberOfPlayers={numberOfPlayers}
        setNumberOfPlayers={setNumberOfPlayers}
      />
    </>
  );
};

export default PlayerSelect;
