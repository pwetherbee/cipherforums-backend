import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: -50,
    padding: 150,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              What is this website?
            </Typography>
            <Typography>
              This website uses the Exclusive Or logic gate (Xor) to encrypt
              comments or posts generated by users, using any 256 bit key of
              their choice.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              How does Xor work?
            </Typography>
            <Typography>
              Xor is a simple logic gate that creates a binary output from two
              binary inputs. The two input strings are compared character by
              character - If the two input strings have the same value, a 0 is
              generated. If the two inputs have a different value, a 1 is
              generated. Below is a descriptive graphic by geeksforgeeks.org/
              demonstrating this logic gate.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              How does this website use Xor to encrypt content?
            </Typography>
            <Typography>
              Both messages and keys are contained in 256 bits, or 64
              characters. Keys utilize the SHA256 hash function to get
              consistent cryptographically secure outputs regaurdless of what
              the user types in. Messages are padded with random letters to make
              sure that their length always equals 64 characters, and are Xored
              with the 64 character SHA256 hash of the chosen key. This website
              styles these inputs in the browser, but the content that is used
              looks like the example below.These text values are converted into
              numbers, and then Xored together to produce cipher text. Doing
              this enables cipher text to be public, and only by Xoring it with
              the key it was generated with will produce the origional message.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>User message:</Typography>
            <Typography>
              Hello, here is an example message.
              <Typography></Typography>
              -------
              <Typography></Typography>
              User key:
              <Typography></Typography>
              Here is an example key
              <Typography></Typography>
              -------
              <Typography></Typography>
              64 character message with padding letters:
              <Typography></Typography>
              QPrJSuIcrZRZqzfOIwwZnWwgqOoI|Hello, here is an example message.|
              <Typography></Typography>
              -------
              <Typography></Typography>
              64 character SHA256 hash of key:
              <Typography></Typography>
              51cc40047e7d5476fcab371037b385a86ce5e64cbe7ebc2a11bb271d8db08558
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Who is this website for?
            </Typography>
            <Typography>
              This website is for people interested in ciphers, secrets, and
              encryption. Users should be aware that the encryption methods used
              by this site are designed to protect information from all common
              individuals, but there are far more secure methods and services
              for people who desire high levels of information security. For
              individuals whose top priority is security, and not the
              interactivity or avaliability of content on this site, it is
              recommended individuals use AES Encryption, which was developed by
              the NSA and is military grade.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              * Disclaimer *
            </Typography>
            <Typography>
              This website is not to be used for criminal activity. This website
              should not be used to store password data, financial data, or any
              sensitive records. While Xor encryption is strong in a vacuum,
              government authorities or advanced cyber security professionals
              could make use of keyloggers, surveillance, inference, endpoint
              breaches, etc. to obtain sensitive information. While these
              methods do require quite a bit of effort, they are not impossible.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
