import React from "react";
import MaskedInput from "react-text-mask";

import Player from "./Player";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Input
} from "@material-ui/core";

interface IGame {
  playerArray: Player[];
}

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
      margin: "5px"
    },
    maskedInput: {
      height: "50px",
      fontSize: "35px",
      width: "55px",
      textAlign: "center"
    },
    dots: {
      //fontWeight: "bold",
      fontSize: "35px"
    }
  })
);

const Game: React.FC<IGame> = props => {
  const { playerArray } = props;
  const classes = useStyles();

  const TextMaskCustom = (props: any) => {
    return (
      <MaskedInput mask={[/[0-9]/, /\d/]} className={classes.maskedInput} />
    );
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Paper style={{ marginTop: "15px" }}>
            <Input
              className={classes.textField}
              //value={values.textmask}
              //onChange={handleChange("textmask")}
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom as any}
            />
            <span className={classes.dots}>:</span>
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
      <Grid container spacing={2} justify="center" direction="row">
        {playerArray.map(player => {
          return <Player key={player.id} player={player} />;
        })}

        {/* <Player /> */}
      </Grid>
    </div>
  );
};

export default Game;
