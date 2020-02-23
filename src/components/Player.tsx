import React from "react";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

interface IPlayer {
  player: Player;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginTop: "10px"
    }
  })
);

const Player: React.FC<IPlayer> = props => {
  const { player } = props;
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Paper className={classes.paper}>{player.name}</Paper>
    </Grid>
  );
};

export default Player;
