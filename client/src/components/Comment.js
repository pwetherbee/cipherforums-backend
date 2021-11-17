import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { CipherText } from "../components/CipherText";
import { green } from "@material-ui/core/colors";
import SecretBox from "../components/SecretBox";
// import LoadingIcon from "../components/LoadingPageIcon";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 1200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  reply: {
    fontSize: 10,
    padding: 0,
  },
  aes: {
    fontSize: 10,
    padding: 0,
    backgroundColor: "black",
    marginLeft: 5,
  },
  aesHolder: {
    fontSize: 11.5,
    color: "yellow",
  },
  delete: {
    // marginLeft: 10,
    fontSize: 10,
    padding: 0,
  },
  titleHolder: {
    maxWidth: 1500,
    marginTop: 25,
    padding: 20,
    marginBottom: 50,
  },
  titleElements: {
    padding: 5,
  },
  avatar: {
    backgroundColor: green[500],
  },
  theComment: {
    overflowWrap: "anywhere",
  },
}));

export const Comment = ({ comment, secret, handleDeleteComment }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item>
          <Avatar className={classes.avatar} variant="rounded" color="green">
            {(comment.author || comment.username).slice(0, 1)}
          </Avatar>
        </Grid>
        <Grid item xs>
          <Grid>
            <Typography variant="caption">
              @{comment.author || comment.username}{" "}
            </Typography>
            <Typography variant="caption">{comment.time} </Typography>
            <Button variant="outlined" className={classes.reply}>
              Reply
            </Button>
            <Button
              variant="outlined"
              className={classes.reply}
              onClick={handleDeleteComment(comment.id)}
            >
              Delete
            </Button>
            <Button disabled="true" variant="outlined" className={classes.aes}>
              <Typography className={classes.aesHolder}>AES</Typography>
              <VpnKeyIcon
                style={{ fontSize: "1vw", color: "yellow", marginLeft: "5" }}
              />
            </Button>
          </Grid>
          <Typography className={classes.theComment} variant="body2">
            {CipherText(
              comment.text || comment.commentText,
              secret || "default_key",
              comment.encryptionType || "xor"
            )}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
