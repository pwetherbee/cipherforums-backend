import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
  bin: {
    padding: 30,
  },
  bin2: {
    padding: 100,
    color: theme.palette.background.default,
  },
}));

export default function Public() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography variant="h3">404</Typography>
      <Typography className={classes.bin}>
        00110100 00110000 00110100
      </Typography>
      <Typography variant="h3">This page couldn't be found :(</Typography>
      <Typography variant="h6" className={classes.bin2}>
        01010011 01101111 01110010 01110010 01111001 00100001
      </Typography>
    </Grid>
  );
}
