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
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@material-ui/core";
// import LoadingIcon from "../components/LoadingPageIcon";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { IconButton, Toolbar, TextField } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { query } from "../helpers/api";
import { encrypt, encryptMultiLine } from "../helpers/convert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    // maxWidth: 1200,
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1.5),
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
    wordWrap: "break-word",
  },
  link: {
    textDecoration: "none",

    color: "blue",
  },
}));

export const Comment = ({
  comment,
  secret,
  handleDeleteComment,
  delay,
  encType,
  disable,
  // replyActive,
  // changeReplyActive,
  // key,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const handleReply = async () => {
    const body = { ...comment };
    body.parentID = comment.commentID;
    body.commentText = encryptMultiLine(replyText, secret, encType || "none");
    body.encType = encType;
    const data = await query(`/api/threads/reply`, body);
    if (data.success) return alert(data.message);
    console.log("response to posting reply:", data);
    return alert("Error replying to comment");
  };
  const classes = useStyles();
  const convertTimeToLocal = function (date) {
    const time = new Date(date + " UTC");
    return time.toLocaleTimeString() + "  " + time.toLocaleDateString();
  };
  const [delayedSecret, setDelayedSecret] = useState("");
  useEffect(() => {
    setTimeout(
      () => {
        setDelayedSecret(secret);
      },
      delay ? 50 * delay : 0
    );
  }, [secret]);

  // useEffect(() => {
  //   setShowReply(replyActive);
  // }, [replyActive]);

  return (
    <Stack
      className={classes.paper}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item>
          <Avatar className={classes.avatar} variant="rounded" color="green">
            {(comment.author || comment.username || "Anonymous").slice(0, 1)}
          </Avatar>
        </Grid>
        <Grid item>
          <RouteLink
            to={`/@${comment.author || comment.username}`}
            className={classes.link}
          >
            <Link> @{comment.author || comment.username || "Anonymous"} </Link>
          </RouteLink>
          <Typography variant="caption">
            {convertTimeToLocal(comment.time || comment.postTime)}{" "}
          </Typography>
          {comment.encryptionType === "aes" ? (
            <Button disabled={true} variant="outlined" className={classes.aes}>
              <Typography className={classes.aesHolder}>AES</Typography>
              <VpnKeyIcon
                style={{ fontSize: "1vw", color: "yellow", marginLeft: "5" }}
              />
            </Button>
          ) : (
            ""
          )}

          <Typography className={classes.theComment} variant="body2">
            {CipherText(
              comment.text || comment.commentText || "",
              delayedSecret || "default_key",
              comment.encryptionType || "xor"
            )}
          </Typography>
          <Collapse in={showMenu || showReply}>
            <Toolbar disableGutters variant="dense">
              <IconButton>
                <FavoriteTwoToneIcon color="primary" size="small" />
              </IconButton>
              {!showReply ? (
                <Button
                  className={classes.reply}
                  onClick={() => {
                    setShowReply(true);
                  }}
                >
                  Reply
                </Button>
              ) : (
                <Button
                  className={classes.reply}
                  onClick={() => {
                    setShowReply(false);
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button className={classes.reply}>Report</Button>
              <Button
                className={classes.reply}
                onClick={handleDeleteComment(comment.id || comment.commentID)}
              >
                Delete
              </Button>
            </Toolbar>
          </Collapse>
          <Collapse in={showReply}>
            <br />
            <TextField
              multiline
              label="reply"
              value={replyText}
              onInput={(e) => setReplyText(e.target.value)}
            />
            <Button onClick={handleReply}>Submit</Button>
          </Collapse>
        </Grid>
      </Grid>
    </Stack>
  );
};
