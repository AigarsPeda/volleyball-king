import React, { useState } from "react";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Button,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const Stats: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <h1>STATS</h1>
    </Grid>
  );
};

export default Stats;
