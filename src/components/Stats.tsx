import React from "react";
import { FaPencilAlt } from "react-icons/fa";
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
import EditPlayer from "./EditPlayer";

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
      letterSpacing: "2.5px",
      borderBottom: "none",
      cursor: "pointer"
    },
    numbers: {
      color: "#fff",
      fontWeight: "bolder",

      borderBottom: "none"
    },
    pencil: {
      marginRight: "15px",
      fontSize: "10px"
    }
  })
);

interface IStats {
  sorterPlayerArray: Player[];
  setSortingOrder: React.Dispatch<React.SetStateAction<string>>;
  editPlayerName?: (id: number) => void;
  playerToEdit?: Player | undefined;
  saveNewPlayerName?: (playerToEdit: Player, newName: string) => void;
}

const Stats: React.FC<IStats> = props => {
  const {
    sorterPlayerArray,
    setSortingOrder,
    editPlayerName,
    playerToEdit,
    saveNewPlayerName
  } = props;
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center">
        <TableContainer
          component={Paper}
          style={{ maxWidth: "500px", marginTop: "10px" }}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.text}></TableCell>
                <TableCell
                  align="right"
                  className={classes.text}
                  onClick={() => setSortingOrder("smallPoints")}
                >
                  Punkti
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.text}
                  onClick={() => setSortingOrder("bigPoints")}
                >
                  Uzvaras
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sorterPlayerArray.map(player => (
                <TableRow key={player.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.text}
                  >
                    {editPlayerName && (
                      <FaPencilAlt
                        className={classes.pencil}
                        onClick={() => editPlayerName(player.id)}
                      />
                    )}

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
      {editPlayerName && saveNewPlayerName && (
        <EditPlayer
          playerToEdit={playerToEdit}
          saveNewPlayerName={saveNewPlayerName}
        />
      )}
    </>
  );
};

export default Stats;
