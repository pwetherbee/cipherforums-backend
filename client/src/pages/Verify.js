import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MoodSharpIcon from "@material-ui/icons/MoodSharp";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  holder: {
    fontSize: 25,
    padding: 40,
    textAlign: "center",
  },
  box: {
    fontSize: 30,
    padding: 40,
    textAlign: "center",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Paper elevation={3} className={classes.holder}>
        {" "}
        Your email has been confirmed!
        {/* <MoodSharpIcon className={classes.box} style={{ fontSize: "3vw" }} /> */}
      </Paper>{" "}
      <Paper elevation={3} className={classes.holder}>
        {" "}
        <RouteLink to={`/login`} style={{ textDecoration: "none" }}>
          <Link underline="always">Login</Link>
        </RouteLink>
      </Paper>{" "}
    </Box>
  );
}
