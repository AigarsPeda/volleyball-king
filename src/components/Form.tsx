import React, { useState } from "react";
import { Button, TextField, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
    maxWidth: "25em"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: "10px",
    width: "100%",
    height: "50px"
  }
}));

interface IForm {
  savePlayerArrayToSate: (name: string) => void;
}

const Form: React.FC<IForm> = props => {
  const [name, setName] = useState<string>("");

  const classes = useStyles();
  const { savePlayerArrayToSate } = props;

  const makeArrayOfPlayers = (e: React.FormEvent) => {
    e.preventDefault();
    savePlayerArrayToSate(name);
    setName("");
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={makeArrayOfPlayers}>
        <TextField
          label="Spēlētāja vārds"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Nākamais
        </Button>
      </form>
    </div>
  );
};

export default Form;
