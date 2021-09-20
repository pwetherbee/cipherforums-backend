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
import SecretBox from "../components/SecretBox";
import LoadingIcon from "../components/LoadingPageIcon";
import { Comment } from "../components/Comment";
import TextField from "@material-ui/core/TextField";
import { encrypt } from "../helpers/convert";

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
  titleHolder: {
    maxWidth: 1500,
    marginTop: 25,
    padding: 20,
    marginBottom: 50,
  },
  titleElements: {
    padding: 5,
  },
  comment: {
    marginTop: 30,
    marginBottom: 10,
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function Post() {
  let match = useRouteMatch();
  let { postname } = useParams();
  const classes = useStyles();
  const [forumData, setForumData] = useState();
  const [comments, setComments] = useState();
  const [secret, setSecret] = useState();
  const [postCommentText, setPostCommentText] = useState("");
  useEffect(() => {
    fetch(`/api/threads/${postname}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.comments);
        setComments(data.comments);
        setForumData(data);
      });
  }, [postname]);

  const updateSecret = function (secret) {
    console.log(secret);
    setSecret(secret);
  };
  const handleSubmitComment = async (e) => {
    if (!secret) {
      alert("You must type a secret key above");
    }
    console.log(forumData);
    // Encrypt comment
    const ciphertext = encrypt(postCommentText, secret);
    const res = await fetch(`/api/threads/${postname}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: ciphertext,
        forumID: forumData.id,
      }),
    });
    if (res.ok) {
      setPostCommentText("");
    }
  };
  return (
    <CssBaseline>
      {forumData ? (
        <Container>
          <Paper className={classes.titleHolder}>
            <Typography variant="subtitle1" className={classes.titleElements}>
              @{forumData?.author}
            </Typography>
            <Typography variant="h6" className={classes.titleElements}>
              {forumData?.title}
            </Typography>
            <Typography variant="body2" className={classes.titleElements}>
              {forumData?.subtitle}
            </Typography>
          </Paper>
          <SecretBox updateSecret={updateSecret} />
          {comments?.map((comment) => (
            <Comment comment={comment} secret={secret} />
          ))}
          <TextField
            className={classes.comment}
            id="outlined-textarea"
            label="Reply"
            value={postCommentText}
            onInput={(e) => setPostCommentText(e.target.value)}
            placeholder="Placeholder"
            multiline
            fullWidth
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitComment}
          >
            Submit Comment
          </Button>
        </Container>
      ) : (
        <LoadingIcon height={"30rem"} />
      )}
    </CssBaseline>
  );
}
