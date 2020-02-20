import React from "react";
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
  setNamesObj: {
    setName1: React.Dispatch<React.SetStateAction<string>>;
    setName2: React.Dispatch<React.SetStateAction<string>>;
    setName3: React.Dispatch<React.SetStateAction<string>>;
    setName4: React.Dispatch<React.SetStateAction<string>>;
    setName5: React.Dispatch<React.SetStateAction<string>>;
  };
  namesObj: {
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    name5: string;
  };
}

const Form: React.FC<IForm> = props => {
  const { namesObj, setNamesObj } = props;
  const { name1, name2, name3, name4, name5 } = namesObj;
  const { setName1, setName2, setName3, setName4, setName5 } = setNamesObj;
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField
        id="name"
        label="Name"
        required
        value={name1}
        onChange={e => setName1(e.target.value)}
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
        required
        value={name2}
        onChange={e => setName2(e.target.value)}
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
        required
        value={name3}
        onChange={e => setName3(e.target.value)}
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
        required
        value={name4}
        onChange={e => setName4(e.target.value)}
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
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
