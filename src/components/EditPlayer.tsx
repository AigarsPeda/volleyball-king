import React, { useState, useEffect } from "react";
import { Button, TextField, makeStyles, Theme } from "@material-ui/core";
import { IoIosClose } from "react-icons/io";
import { languagesText } from "../data/language";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(60, 58, 66, 0.900)"
  },
  form: {
    paddingTop: "15em",
    paddingLeft: "5px",
    paddingRight: "5px",
    margin: "auto",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    color: "#ffffff"
  },
  plus: {
    color: "rgba(232,48,58,1)",
    textAlign: "right",
    cursor: "pointer",
    fontSize: "45px"
  }
}));

interface IEditPlayer {
  playerToEdit: Player | undefined;
  saveNewPlayerName: (playerToEdit: Player, newName: string) => void;
  setOpenEditPlayer: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  language: Lang;
}

const EditPlayer: React.FC<IEditPlayer> = props => {
  const [name, setName] = useState("");
  const {
    playerToEdit,
    saveNewPlayerName,
    setOpenEditPlayer,
    language
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (!playerToEdit) {
      return;
    }
    setName(playerToEdit.name);
  }, [playerToEdit]);

  const savePlayerName = () => {
    if (!playerToEdit) {
      return;
    }
    saveNewPlayerName(playerToEdit, name);
  };

  const closeEditPlayer = () => {
    if (!setOpenEditPlayer) {
      return;
    }
    setOpenEditPlayer(false);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={savePlayerName}>
        <span className={classes.plus}>
          <IoIosClose onClick={closeEditPlayer} />
        </span>

        <TextField
          required
          label={
            language.checkedENG
              ? languagesText.eng.playersName
              : languagesText.lv.playersName
          }
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
          InputProps={{
            className: classes.textField
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          {language.checkedENG
            ? languagesText.eng.editPlayersName
            : languagesText.lv.editPlayersName}
        </Button>
      </form>
    </div>
  );
};

export default EditPlayer;
