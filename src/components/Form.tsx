import React, { useState } from "react";
import { Button, TextField, makeStyles, Theme } from "@material-ui/core";
import { languagesText } from "../data/language";

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
    height: "50px",
    backgroundClip: "#rgb(248,106,40)",
    background:
      "linear-gradient(90deg, rgba(248,106,40,1) 0%, rgba(232,48,58,1) 100%)",
    color: "#fff"
  },
  textField: {
    color: "#ffffff"
  }
}));

interface IForm {
  savePlayerArrayToSate: (name: string) => void;
  language: Lang;
}

const Form: React.FC<IForm> = props => {
  const { savePlayerArrayToSate, language } = props;

  const [name, setName] = useState<string>("");
  const classes = useStyles();

  const makeArrayOfPlayers = (e: React.FormEvent) => {
    e.preventDefault();
    savePlayerArrayToSate(name);
    setName("");
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={makeArrayOfPlayers}>
        <TextField
          label={
            language.checkedENG
              ? languagesText.eng.playersName
              : languagesText.lv.playersName
          }
          required
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
          InputProps={{
            className: classes.textField
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          {language.checkedENG
            ? languagesText.eng.addPlayer
            : languagesText.lv.addPlayer}
        </Button>
      </form>
    </div>
  );
};

export default Form;
