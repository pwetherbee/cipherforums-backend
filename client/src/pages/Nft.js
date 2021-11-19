import React from "react";
import { styled } from "@material-ui/core/styles";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <img src="https://i.imgur.com/TXe9weC.jpeg"></img>
      </Grid>
      <Grid item xs={4}>
        <img src="https://i.imgur.com/TXe9weC.jpeg"></img>
      </Grid>
      <Grid item xs={4}>
        <img src="https://i.imgur.com/TXe9weC.jpeg"></img>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: 10,
  },
  hold: {
    width: 1400,
    marginLeft: 18,
    marginTop: 10,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.hold}>
      <Grid container item spacing={12}>
        <Typography variant="h3">Objkts</Typography>
      </Grid>
      <Grid container item spacing={3}>
        <FormRow />
      </Grid>
      <Grid container item spacing={3}>
        <FormRow />
      </Grid>
      <Grid container item spacing={3}>
        <FormRow />
      </Grid>
    </Grid>
  );
}
