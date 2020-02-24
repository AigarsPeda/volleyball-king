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
      background:
        "linear-gradient(180deg, rgba(46,46,60,1) 0%, rgba(42,42,54,1) 100%)",
      marginTop: "10px",
      backgroundColor: "#22222a",
      color: "#ffffff"
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
