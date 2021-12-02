import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import LaptopChromebookSharpIcon from "@material-ui/icons/LaptopChromebookSharp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import homeLogo from "../logo.svg";
import { encrypt, decrypt } from "../helpers/convert.js";
import "../snowflakes.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    padding: 50,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    wordBreak: "break-word",
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: 100,
    paddingBottom: 100,
    textAlign: "center",
    boxShadow: "none",
    color: theme.palette.text.secondary,
    // borderTopWidth: 3,
    // borderColor: theme.palette.text.secondary,
    // borderStyle: "solid",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const title = "cipherforums.com";
  const subtitle = "A cryptographically secure forum";
  const [char, setChar] = useState("a");
  const [cipherTexts, setCipherTexts] = useState({
    title: {
      xor: encrypt(title, "xor", "xor"),
      aes: encrypt(title, "xor", "aes"),
    },
    subtitle: {
      xor: encrypt(subtitle, "xor", "xor"),
      aes: encrypt(subtitle, "xor", "aes"),
    },
  });
  const [secret, setSecret] = useState("xor");
  const randomSecrets = () => {
    setSecret("xor");
    setTimeout(() => {
      const interval = setInterval(() => setSecret(Math.random() * 100), 100);
      setTimeout(() => {
        clearInterval(interval);
        randomSecrets();
      }, 1000);
    }, 3000);
  };
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  useEffect(() => {
    document.title = "Cipherforums";
    setInterval(() => {
      setChar(characters.charAt(Math.random() * 62));
    }, 100);
    // randomly generate secret keys
    //5b351c7f7d64542873542c1a4e744f5c604a2e1365687f655a3b5d470155684b7b5b24007869557246302c43687819540845585310050b464c59171754090944
    console.log(
      encrypt("the only cryptographically secure forum", "xor", "aes")
    );
    randomSecrets();
  }, []);

  return (
    <div className={classes.root}>
      {Array(200)
        .fill()
        .map(() => (
          <div class="snowflake triangle">{char}</div>
        ))}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12}>
          <Container>
            <Typography variant="h1" align="center">
              {decrypt(cipherTexts.title.aes, secret, "aes").slice(0, 16) ||
                "_" * 16}
            </Typography>
            <Typography variant="h5" align="center">
              {decrypt(cipherTexts.subtitle.aes, secret, "aes").slice(0, 40) ||
                "_____" * 50}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/public">
            <Paper className={classes.paper}>
              <LaptopChromebookSharpIcon style={{ fontSize: "13vw" }} />
              <Typography>Visit the public forums</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/signup">
            <Paper className={classes.paper}>
              <ExitToAppIcon style={{ fontSize: "13vw" }} />
              <Typography>Signup</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
