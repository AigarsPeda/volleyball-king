import React, { useState } from "react";
import Player from "./Player";

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
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginTop: "10px"
    },
    borderRadius: {
      fontSize: 32,
      color: "#fff",
      padding: "10px"
    },
    textField: {
      margin: "5px",
      width: "75px",
      fontSize: "45px",
      textAlign: "center"
    },
    maskedInput: {
      height: "50px",
      fontSize: "35px",
      width: "55px",
      textAlign: "center"
    },
    dots: {
      fontSize: "45px"
    },
    button: {
      backgroundClip: "rgb(248,106,40)",
      background:
        "linear-gradient(90deg, rgba(248,106,40,1) 0%, rgba(232,48,58,1) 100%)",
      marginTop: "10px",
      width: "100%",
      height: "50px",
      color: "#fff"
    },
    playerPaper: {
      padding: "1px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px solid rgba(248,106,40,1)",
      backgroundColor: "transparent"
    }
  })
);

interface IGame {
  playerArray: Player[];
  setPlayerArray: React.Dispatch<React.SetStateAction<Player[]>>;
  setGameNumber: React.Dispatch<any>;
  gameNumber: number;
}

const Game: React.FC<IGame> = props => {
  const { playerArray, setPlayerArray, setGameNumber, gameNumber } = props;
  const classes = useStyles();

  const [teamAScore, setTeamAScore] = useState("");
  const [teamBScore, setTeamBScore] = useState("");

  const teamA: Player[] = [];
  const teamB: Player[] = [];

  const findWinner = () => {
    if (teamAScore.length === 0 || teamBScore.length === 0) {
      return;
    }
    if (teamAScore === teamBScore) {
      return;
    }
    if (parseInt(teamAScore) > parseInt(teamBScore)) {
      const [playerOne, playerTwo] = teamA;
      const newPlayerArray = playerArray.map(player => {
        if (player.id === playerOne.id || player.id === playerTwo.id) {
          return {
            ...player,
            bigPoints: player.bigPoints + 1,
            smallPoints: player.smallPoints + parseInt(teamAScore)
          };
        }
        return player;
      });
      setPlayerArray(newPlayerArray);
    }
    if (parseInt(teamAScore) < parseInt(teamBScore)) {
      const [playerOne, playerTwo] = teamB;
      const newPlayerArray = playerArray.map(player => {
        if (player.id === playerOne.id || player.id === playerTwo.id) {
          return {
            ...player,
            bigPoints: player.bigPoints + 1,
            smallPoints: player.smallPoints + parseInt(teamBScore)
          };
        }
        return player;
      });
      setPlayerArray(newPlayerArray);
    }
    setTeamAScore("");
    setTeamBScore("");
    setGameNumber((prev: number) => prev + 1);
  };

  const allowOnlyNumbersInInput = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  playerArray.forEach(player => {
    switch (gameNumber) {
      case 1:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 2:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 3:
        if (player.id === 0 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 4:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 5:
        if (player.id === 1 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 3 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 6:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 7:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 8:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 9:
        if (player.id === 0 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;
      case 10:
        if (player.id === 1 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 11:
        if (player.id === 0 || player.id === 3) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;

      case 12:
        if (player.id === 0 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 1 || player.id === 2) {
          teamB.push(player);
        }
        break;
      case 13:
        if (player.id === 0 || player.id === 1) {
          teamA.push(player);
        } else if (player.id === 3 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 14:
        if (player.id === 0 || player.id === 2) {
          teamA.push(player);
        } else if (player.id === 3 || player.id === 4) {
          teamB.push(player);
        }
        break;
      case 15:
        if (player.id === 1 || player.id === 4) {
          teamA.push(player);
        } else if (player.id === 2 || player.id === 3) {
          teamB.push(player);
        }
        break;

      default:
        break;
    }
  });

  return (
    <div className={classes.root}>
      {console.log(gameNumber)}
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Paper
            style={{
              marginTop: "15px",
              background:
                "linear-gradient(90deg, rgba(248,106,40,1) 0%, rgba(232,48,58,1) 100%)",
              marginBottom: "10px"
            }}
          >
            <TextField
              className={classes.textField}
              value={teamAScore}
              onChange={e => setTeamAScore(e.target.value)}
              variant="outlined"
              type="text"
              inputProps={{
                maxLength: 2,
                className: classes.borderRadius,
                style: { textAlign: "center" }
              }}
              onInput={e => allowOnlyNumbersInInput(e)}
            />
            <span className={classes.dots}>:</span>
            <TextField
              className={classes.textField}
              value={teamBScore}
              variant="outlined"
              onChange={e => setTeamBScore(e.target.value)}
              type="text"
              inputProps={{
                maxLength: 2,
                className: classes.borderRadius,
                style: { textAlign: "center" }
              }}
              onInput={e => allowOnlyNumbersInInput(e)}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" direction="row">
        <Grid item lg={4} xs={6}>
          <Paper className={classes.playerPaper}>
            {teamA.map(a => {
              return <Player key={a.id} player={a} />;
            })}
          </Paper>
        </Grid>

        <Grid item lg={4} xs={6}>
          <Paper className={classes.playerPaper}>
            {teamB.map(b => {
              return <Player key={b.id} player={b} />;
            })}
          </Paper>
        </Grid>

        <Grid container justify="center">
          <Grid item lg={3} xs={10}>
            <Button
              onClick={findWinner}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Nākamā spēle
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Game;
