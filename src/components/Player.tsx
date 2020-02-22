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
    <Grid item xs={6}>
      <Grid container direction="column">
        <Grid item>
          <Paper className={classes.paper}>{player.name}</Paper>
        </Grid>
        {/* <Grid item>
          <Paper className={classes.paper}>{player.name}</Paper>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Player;
