import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import LaptopChromebookSharpIcon from "@material-ui/icons/LaptopChromebookSharp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 100,
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: 150,
    paddingBottom: 150,
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderTopWidth: 3,
    borderColor: theme.palette.text.secondary,
    borderStyle: "solid",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Link href="/public">
            <Paper className={classes.paper}>
              <LaptopChromebookSharpIcon style={{ fontSize: 200 }} />
              <Typography>Visit the public forums</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/signup">
            <Paper className={classes.paper}>
              <ExitToAppIcon style={{ fontSize: 200 }} />
              <Typography>Signup</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
