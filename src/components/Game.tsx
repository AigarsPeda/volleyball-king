import React, { useState } from "react";

import Player from "./Player";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Input,
  Button
} from "@material-ui/core";

interface IGame {
  playerArray: Player[];
  setPlayerArray: React.Dispatch<React.SetStateAction<Player[]>>;
}

interface State {
  teamAScore: string;
  teamBScore: string;
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
      margin: "5px",
      width: "75px",
      height: "80px",
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
      fontSize: "35px"
    }
  })
);

const Game: React.FC<IGame> = props => {
  const { playerArray, setPlayerArray } = props;
  const [gameNumber, setGameNumber] = useState(1);
  const [teamAScore, setTeamAScore] = useState("");
  const [teamBScore, setTeamBScore] = useState("");

  const classes = useStyles();

  const teamA: Player[] = [];
  const teamB: Player[] = [];

  const findWinner = () => {
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
    setGameNumber(prev => prev + 1);
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
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Paper style={{ marginTop: "15px" }}>
            <Input
              className={classes.textField}
              value={teamAScore}
              onChange={e => setTeamAScore(e.target.value)}
              id="formatted-text-mask-input"
              type="number"
            />
            <span className={classes.dots}>:</span>
            <Input
              className={classes.textField}
              value={teamBScore}
              onChange={e => setTeamBScore(e.target.value)}
              id="formatted-text-mask-input-2"
              type="number"
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" direction="row">
        <Grid item xs={6}>
          {teamA.map(a => {
            return <Player key={a.id} player={a} />;
          })}
        </Grid>
        <Grid item xs={6}>
          {teamB.map(b => {
            return <Player key={b.id} player={b} />;
          })}
        </Grid>
      </Grid>
      <Button onClick={findWinner}>Next Game</Button>
    </div>
  );
};

export default Game;
