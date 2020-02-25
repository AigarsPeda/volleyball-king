import React from "react";

import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from "@material-ui/core";

interface IStats {
  playerArray: Player[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      maxWidth: 650,
      backgroundColor: "#2a2b37",
      color: "#fff"
    },
    text: {
      color: "#fff",
      fontWeight: "bolder",
      letterSpacing: "3px",
      borderBottom: "none"
    },
    numbers: {
      color: "#fff",
      fontWeight: "bolder",

      borderBottom: "none"
    }
  })
);

const Stats: React.FC<IStats> = props => {
  const { playerArray } = props;
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <TableContainer
        component={Paper}
        style={{ maxWidth: "500px", marginTop: "30px" }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.text}></TableCell>
              <TableCell align="right" className={classes.text}>
                Punkti
              </TableCell>
              <TableCell align="right" className={classes.text}>
                Uzvaras
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerArray.map(player => (
              <TableRow key={player.id}>
                <TableCell component="th" scope="row" className={classes.text}>
                  {player.name}
                </TableCell>
                <TableCell align="right" className={classes.numbers}>
                  {player.smallPoints}
                </TableCell>
                <TableCell align="right" className={classes.numbers}>
                  {player.bigPoints}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Stats;
