import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: 500,
    minWidth: 320,
    padding: 20,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <img
            className={classes.img}
            src="https://i.imgur.com/MYmm7E1.jpeg"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            className={classes.img}
            src="https://i.imgur.com/A3HI0Xm.jpeg"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            className={classes.img}
            src="https://i.imgur.com/MYmm7E1.jpeg"
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}
