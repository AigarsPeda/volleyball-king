import React, { useState } from "react";
import { Button, TextField, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  text: {},
  root: {
    display: "flex",
    flexDirection: "column",
    width: "25em"
  },
  button: {
    marginTop: "10px"
  }
}));

interface IForm {
  savePlayerArrayToSate: (newArray: Player[]) => void;
}

const Form: React.FC<IForm> = props => {
  const [name1, setName1] = useState<string>("");
  const [name2, setName2] = useState<string>("");
  const [name3, setName3] = useState<string>("");
  const [name4, setName4] = useState<string>("");
  const [name5, setName5] = useState<string>("");
  const classes = useStyles();
  const { savePlayerArrayToSate } = props;

  const makeArrayOfPlayers = (e: React.FormEvent) => {
    e.preventDefault();
    const player1: Player = {
      id: 1,
      name: name1,
      bigPoints: 0,
      smallPoints: 0
    };
    const player2: Player = {
      id: 2,
      name: name2,
      bigPoints: 0,
      smallPoints: 0
    };
    const player3: Player = {
      id: 3,
      name: name3,
      bigPoints: 0,
      smallPoints: 0
    };
    const player4: Player = {
      id: 4,
      name: name4,
      bigPoints: 0,
      smallPoints: 0
    };
    const player5: Player = {
      id: 5,
      name: name5,
      bigPoints: 0,
      smallPoints: 0
    };
    const newPlayerArray = [player1, player2, player3, player4, player5];
    savePlayerArrayToSate(newPlayerArray);
  };
  return (
    <form className={classes.root} onSubmit={makeArrayOfPlayers}>
      <TextField
        label="Spēlētāja vārds"
        required
        value={name1}
        onChange={e => setName1(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Spēlētāja vārds"
        required
        value={name2}
        onChange={e => setName2(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Spēlētāja vārds"
        required
        value={name3}
        onChange={e => setName3(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Spēlētāja vārds"
        required
        value={name4}
        onChange={e => setName4(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Spēlētāja vārds"
        required
        value={name5}
        onChange={e => setName5(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
      >
        Saglabāt
      </Button>
    </form>
  );
};

export default Form;
