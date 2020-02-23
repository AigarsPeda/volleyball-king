import React, { useState } from "react";

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

interface State {
  teamA: string;
  teamB: string;
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
      fontSize: "35px"
    }
  })
);

const Game: React.FC<IGame> = props => {
  const { playerArray } = props;
  const [gameNumber, setGameNumber] = useState(1);
  const [score, setTeamScore] = useState<State>({
    teamA: " ",
    teamB: " "
  });

  const classes = useStyles();

  //1
  //12 - 34 - 5

  //JA STATE IR 1 SPĒLE
  //TAD PIE PIEVIENO 1 UN 2 SARAKSTĀ A-KOMANDA
  //JA 3 - 4 TAD B-KOMANDA

  // const TextMaskCustom = (props: any) => {
  //   const { inputRef, ...other } = props;
  //   return (
  //     <NumberFormat
  //       {...other}
  //       ref={(ref: any) => {
  //         inputRef(ref ? ref.inputElement : null);
  //       }}
  //       //value={2456981}
  //       // mask={[/[0-9]/, /\d/]}
  //       // showMask
  //       className={classes.maskedInput}
  //     />
  //   );
  // };

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTeamScore({
      ...score,
      [name]: event.target.value
    });
  };

  // const gamesOrder = (player: Player) => {
  //   return;
  // };
  console.log("A: ", score.teamA);
  console.log("B: ", score.teamB);

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Paper style={{ marginTop: "15px" }}>
            <Input
              className={classes.textField}
              value={score.teamA}
              onChange={handleChange("teamA")}
              id="formatted-text-mask-input"
              //inputComponent={TextMaskCustom as any}
            />
            <span className={classes.dots}>:</span>
            <Input
              className={classes.textField}
              value={score.teamB}
              onChange={handleChange("teamB")}
              id="formatted-text-mask-input-2"
              //inputComponent={TextMaskCustom as any}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" direction="row">
        {/* {playerArray.map(player => {
          return <Player key={player.id} player={player} />;
        })} */}

        {playerArray.map(player => {
          switch (gameNumber) {
            case 1:
              if (player.id === 0 || player.id === 1) {
                return <Player key={player.id} player={player} />;
              } else if (player.id === 2 || player.id === 3) {
                return <Player key={player.id} player={player} />;
              }

              break;
            case 2:
              if (player.id === 2) {
                return <Player key={player.id} player={player} />;
              }
              break;

            default:
              return console.log("BEIGAS");
          }
          return console.log("YES");
        })}

        {/* <Player /> */}
      </Grid>
    </div>
  );
};

export default Game;
