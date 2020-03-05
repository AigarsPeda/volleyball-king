import React from "react";
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
  textField: {
    color: "#ffffff"
  }
}));

interface IEditPlayer {
  playerToEdit: Player | undefined;
}

const EditPlayer: React.FC<IEditPlayer> = props => {
  const { playerToEdit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        //onSubmit={makeArrayOfPlayers}
      >
        <TextField
          //required
          value={playerToEdit?.name}
          //onChange={e => setName(e.target.value)}
          margin="normal"
          InputProps={{
            className: classes.textField
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Saglabāt spēlētāju
        </Button>
      </form>
    </div>
  );
};

export default EditPlayer;
