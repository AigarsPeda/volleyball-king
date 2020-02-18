import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormGroup,
  Typography,
  makeStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  text: {},
  root: {
    display: "flex"
  },
  button: {
    //backgroundColor: theme.palette.secondary.main,
    marginTop: "10px"
  }
}));

interface IForm {
  namesObj: {
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    name5: string;
  };
  setNamesObj: {
    setName1: React.Dispatch<React.SetStateAction<string>>;
    setName2: React.Dispatch<React.SetStateAction<string>>;
    setName3: React.Dispatch<React.SetStateAction<string>>;
    setName4: React.Dispatch<React.SetStateAction<string>>;
    setName5: React.Dispatch<React.SetStateAction<string>>;
  };
}

const Form: React.FC<IForm> = props => {
  const { namesObj, setNamesObj } = props;
  const { name1, name2, name3, name4, name5 } = namesObj;
  const { setName1, setName2, setName3, setName4, setName5 } = setNamesObj;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <Typography variant="h6" className={classes.text}>
          Ievadi spēlētāju vārdus
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="pirmais vārds">1 vārdu</InputLabel>
            <Input
              aria-describedby="for players name"
              onChange={e => setName1(e.target.value)}
              value={name1}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="otrais vārds">2 vārdu</InputLabel>
            <Input
              aria-describedby="for players name"
              onChange={e => setName2(e.target.value)}
              value={name2}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="trešais vārds">3 vārdu</InputLabel>
            <Input
              aria-describedby="for players name"
              onChange={e => setName3(e.target.value)}
              value={name3}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="ceturtais vārds">4 vārdu</InputLabel>
            <Input
              aria-describedby="for players name"
              onChange={e => setName4(e.target.value)}
              value={name4}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="piektais vārds">5 vārdu</InputLabel>
            <Input
              aria-describedby="for players name"
              onChange={e => setName5(e.target.value)}
              value={name5}
            />
          </FormControl>
        </FormGroup>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          //type="submit"
        >
          Saglabāt
        </Button>
      </FormControl>
    </div>
  );
};

export default Form;
