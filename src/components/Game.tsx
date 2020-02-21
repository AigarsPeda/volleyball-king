import React from "react";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

const Game = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" direction="row">
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item>
              <Paper className={classes.paper}>Aigars</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Oskars</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item>
              <Paper className={classes.paper}>Pēteris</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Jānis</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Game;
