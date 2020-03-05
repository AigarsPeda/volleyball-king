import React, { useState, useEffect } from "react";
import { Button, TextField, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
    //maxWidth: "25em",
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
  }
}));

interface IEditPlayer {
  playerToEdit: Player | undefined;
  saveNewPlayerName: (playerToEdit: Player, newName: string) => void;
}

const EditPlayer: React.FC<IEditPlayer> = props => {
  const [name, setName] = useState("");
  const { playerToEdit, saveNewPlayerName } = props;
  const classes = useStyles();

  console.log(name);

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

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={savePlayerName}>
        <TextField
          required
          label="Spēlētāja vārds"
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
          InputProps={{
            className: classes.textField
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Labot spēlētāja vārdu
        </Button>
      </form>
    </div>
  );
};

export default EditPlayer;
