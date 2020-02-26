import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  })
);

interface IPlayerCountSelect {
  numberOfPlayers: number | undefined;
  setNumberOfPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const PlayerCountSelect: React.FC<IPlayerCountSelect> = props => {
  const classes = useStyles();
  const { numberOfPlayers, setNumberOfPlayers } = props;

  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNumberOfPlayers(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container justify="center">
      <Button className={classes.button} onClick={handleOpen}>
        Cik spētētāju būs?
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Skaits</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={numberOfPlayers}
          onChange={handleChange}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>

          <MenuItem value={4}>Četri</MenuItem>
          <MenuItem value={5}>Pieci</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default PlayerCountSelect;
