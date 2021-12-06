import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MoodSharpIcon from "@mui/icons-material/MoodSharp";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";
import { useHistory, useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  holder: {
    fontSize: 25,
    padding: 40,
    textAlign: "center",
    backgroundColor: "black",
  },
  box: {
    fontSize: 30,
    padding: 40,
    textAlign: "center",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const history = useHistory();
  let { emailToken } = useParams();
  useEffect(async () => {
    const res = await fetch("/api/signup/validate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailToken: emailToken }),
    });
    const data = await res.json();
    console.log(data);
    if (!data.success) {
      alert(data.message);
    } else {
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
  }, []);

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
