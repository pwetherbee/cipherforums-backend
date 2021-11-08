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
import { Route, useParams, useRouteMatch } from "react-router";
import { CipherText } from "../components/CipherText";
import SecretBox from "../components/SecretBox";
import LoadingIcon from "../components/LoadingPageIcon";
import { Comment } from "../components/Comment";
import TextField from "@material-ui/core/TextField";
import { encrypt } from "../helpers/convert";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    wordBreak: "break-all",
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
  submitBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 50,
  },
  mainimg: {
    maxWidth: 300,
  },
}));
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function Post() {
  let match = useRouteMatch();
  let { postname } = useParams();
  const classes = useStyles();
  const [forumData, setForumData] = useState();
  const [comments, setComments] = useState();
  const [secret, setSecret] = useState();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [postCommentText, setPostCommentText] = useState("");
  useEffect(() => {
    fetch(`/api/threads/${postname}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data.comments);
        setForumData(data);
      });
  }, [postname]);

  const updateSecret = function (secret) {
    setSecret(secret);
  };
  const handleSubmitComment = async (e) => {
    if (!postCommentText.length) {
      setError(true);
      setHelperText("Your comment has no text");
      return;
    }
    if (!secret) {
      setError(true);
      setHelperText("You must type a secret key above");
      return;
    }
    console.log(postCommentText.length);
    if (postCommentText.length > 64) {
      console.log(postCommentText.length < 64);
      setError(true);
      setHelperText("Comment must be shorter than 64 characters");
      return;
    }
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
      setError(false);
      setHelperText("");
      // Render new comment
      const newComment = await res.json();
      setComments([...comments, newComment]);
      setPostCommentText("");
    } else {
      setError(true);
      setHelperText("error posting comment");
    }
  };
  return (
    <CssBaseline>
      {forumData ? (
        <Container>
          <Paper className={classes.titleHolder}>
            <Typography variant="subtitle1" className={classes.titleElements}>
              Post to{" "}
              {
                <RouteLink
                  to={`/public/${forumData.publicTopic}`}
                  style={linkStyle}
                >
                  <Link>{forumData.publicTopic}</Link>
                </RouteLink>
              }{" "}
              by @
              {
                <RouteLink to={`/user/${forumData.author}`} style={linkStyle}>
                  <Link>{forumData.author}</Link>
                </RouteLink>
              }
            </Typography>
            <Typography variant="h6" className={classes.titleElements}>
              {forumData?.title.slice(0, -5)}
            </Typography>
            {forumData?.image && (
              <img className={classes.mainimg} src={forumData.image} />
            )}
            <Typography variant="body2" className={classes.titleElements}>
              {forumData?.subtitle}
            </Typography>
          </Paper>
          <SecretBox updateSecret={updateSecret} secret={secret} />
          {comments?.map((comment) => (
            <Comment comment={comment} secret={secret} />
          ))}
          <TextField
            error={error}
            helperText={helperText}
            className={classes.comment}
            id="outlined-textarea"
            label="Reply"
            value={postCommentText}
            onInput={(e) => {
              setError(false);
              setHelperText("");
              setPostCommentText(e.target.value);
            }}
            placeholder="Enter your comment here"
            multiline
            fullWidth
            variant="outlined"
          />
          <Container className={classes.submitBox}>
            <Button
              disabled={!postCommentText.length}
              variant="contained"
              color="primary"
              onClick={handleSubmitComment}
            >
              Submit Comment
            </Button>
            <SecretBox updateSecret={updateSecret} secret={secret} />
          </Container>
        </Container>
      ) : (
        <LoadingIcon height={"30rem"} />
      )}
    </CssBaseline>
  );
}
