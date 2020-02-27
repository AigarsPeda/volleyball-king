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
      marginTop: theme.spacing(2),
      color: "#fff",
      fontSize: "18px"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 190
    },
    title: {
      fontSize: "60px",
      fontWeight: "bold",
      letterSpacing: "3px",
      background:
        "linear-gradient(90deg, rgba(248,106,40,1) 0%, rgba(232,48,58,1) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    grid: {
      marginBottom: "10px",
      marginLeft: "auto",
      marginRight: "auto"
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
    <Grid container direction="column">
      <Grid item className={classes.grid}>
        <h1 className={classes.title}>THE KING</h1>
      </Grid>
      <Grid item style={{ margin: "auto" }}>
        <Button className={classes.button} onClick={handleOpen}>
          Cik spēlētāju būs?
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
            <MenuItem value={0} style={{ letterSpacing: "1px" }}>
              <em>None</em>
            </MenuItem>

            <MenuItem value={4} style={{ letterSpacing: "1px" }}>
              <em>Četri</em>
            </MenuItem>
            <MenuItem value={5} style={{ letterSpacing: "1px" }}>
              <em>Pieci</em>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PlayerCountSelect;
