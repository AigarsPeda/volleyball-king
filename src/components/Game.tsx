import React from "react";
import MaskedInput from "react-text-mask";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  TextField,
  Input
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginTop: "10px"
    },
    textField: {
      width: "100px",
      margin: "5px"
      //border: "1px solid #e82e3a"
    }
  })
);

const Game: React.FC = () => {
  const classes = useStyles();

  const TextMaskCustom = (props: any) => {
    return <MaskedInput mask={[/[0-9]/, /\d/]} />;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" direction="row">
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
        <Grid item>
          <Paper>
            <Input
              className={classes.textField}
              //value={values.textmask}
              //onChange={handleChange("textmask")}
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom as any}
            />
            <Input
              className={classes.textField}
              //value={values.textmask}
              //onChange={handleChange("textmask")}
              id="formatted-text-mask-input-2"
              inputComponent={TextMaskCustom as any}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Game;
