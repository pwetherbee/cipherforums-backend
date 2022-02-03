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
import { decrypt, encrypt, encryptMultiLine } from "../helpers/convert";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import ConfirmDelete from "../components/ConfirmDelete";
import Switch from "@material-ui/core/Switch";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    wordBreak: "break-all",
  },

  paper: {
    // maxWidth: 200,
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  reply: {
    fontSize: 10,
    padding: 0,
  },
  titleHolder: {
    // maxWidth: 1500,
    marginTop: 0,
    paddingBottom: 20,
    // marginBottom: 40,
  },
  titleElements: {
    marginTop: 10,
    // padding: 5,
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
    width: "100%",
    // marginLeft: 300,
  },
  imgDiv: {
    // maxWidth: 1000,
    // margin: "auto",
    textAlign: "center",
    margin: "auto",
    width: "50%",
    marginTop: 40,
  },
  imgDiv2: {
    // maxWidth: 1000,
    // margin: "auto",
    margin: "auto",
    width: "50%",
    marginTop: 50,
  },
  desc: {
    // width: 1200,
    // margin: "auto",
    height: "90vh",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    // width: "70%",
  },
  aesType: {
    fontSize: 15,
    color: theme.palette.primary,
  },
  holder: {
    // width: 1600,
    marginLeft: 100,
  },
  icon: {
    position: "absolute",
    right: 30,
    top: 30,
    transform: "scale(1.8)",
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
  let { topic, postname, username } = useParams();
  const classes = useStyles();
  const [forumData, setForumData] = useState();
  const [comments, setComments] = useState();
  const [secret, setSecret] = useState();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [deleteCommentData, setDeleteCommentData] = useState({});
  const [postCommentText, setPostCommentText] = useState("");
  const [encType, setEncType] = useState("xor");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [encChecked, setEncChecked] = useState(false);

  useEffect(() => {
    fetch(`/api/threads/${topic || username}/${postname}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          // handle error in request
        }
        console.log(data);
        setForumData(data);
        setComments(data.comments);
        setSecret(data.publicTopic?.toLowerCase() || "");
      });
  }, [postname]);

  useEffect(() => {
    if (!comments) return;
    let interval = setInterval(() => {
      setSecret(Math.floor(10 ** 8 * Math.random()).toString(16));
    }, 40);
    setTimeout(() => {
      clearInterval(interval);
      setSecret(forumData.publicTopic?.toLowerCase() || "");
    }, 500);
  }, [comments]);

  const handleChangeEnc = (event) => {
    setEncChecked(event.target.checked);
    setEncType(event.target.checked ? "aes" : "xor");
  };

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
    // if (postCommentText.length > 64) {
    //   console.log(postCommentText.length < 64);
    //   setError(true);
    //   setHelperText("Comment must be shorter than 64 characters");
    //   return;
    // }
    // Encrypt comment
    console.log(postCommentText, secret);
    const ciphertext = encryptMultiLine(postCommentText, secret, encType);
    const res = await fetch(`/api/threads/${topic || username}/${postname}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: ciphertext,
        forumID: forumData.id,
        encType: encType,
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
  const handleDeleteComment = (data) => () => {
    setOpenConfirmDelete(true);
    setDeleteCommentData(data);
  };
  const handleDecision = (decision) => async () => {
    if (decision === "agree") {
      console.log("deleting comment");
      console.log(deleteCommentData);
      // make fetch to delete
      const res = await fetch("/api/delete/comment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: deleteCommentData }),
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.message);
      }
    }
    setOpenConfirmDelete(false);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  return (
    <CssBaseline>
      {forumData ? (
        <Grid container>
          <Stack direction="column" className={classes.holder}>
            <Stack>
              <ConfirmDelete
                open={openConfirmDelete}
                handleDecision={handleDecision}
                handleClose={handleCloseConfirmDelete}
              />
              <Paper className={classes.titleHolder}>
                <Typography variant="h3" className={classes.titleElements}>
                  {forumData?.title.slice(0, -5)}
                </Typography>
                <Typography variant="body2" className={classes.titleElements}>
                  {forumData?.subtitle}
                </Typography>
                {forumData?.image && (
                  <div className={classes.imgDiv}>
                    <Button onClick={handleOpen}>
                      <img className={classes.mainimg} src={forumData.image} />
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <div onClick={handleClose}>
                          <CloseIcon className={classes.icon} />
                        </div>
                        <img className={classes.desc} src={forumData.image} />
                      </Box>
                    </Modal>
                  </div>
                )}
                <Typography
                  variant="subtitle1"
                  className={classes.titleElements}
                >
                  Post to
                  {
                    <RouteLink
                      to={`/${
                        forumData.postType == "public" ? "public/" : "@"
                      }${forumData.publicTopic}`}
                      style={linkStyle}
                    >
                      <Link>{forumData.publicTopic}</Link>
                    </RouteLink>
                  }
                  by
                  {
                    <RouteLink to={`/@${forumData.author}`} style={linkStyle}>
                      <Link>{"@" + forumData.author}</Link>
                    </RouteLink>
                  }
                </Typography>
              </Paper>
            </Stack>
            <Stack>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                {encType === "xor" ? (
                  <Typography className={classes.aesType}>
                    Using {encType.toLocaleUpperCase()}
                  </Typography>
                ) : (
                  <Typography
                    className={classes.aesType}
                    style={{ color: "#FFFF00" }}
                  >
                    Using {encType.toLocaleUpperCase()}
                  </Typography>
                )}
                <Switch
                  checked={encChecked}
                  onChange={handleChangeEnc}
                  inputProps={{ "aria-label": "controlled" }}
                  color="secondary"
                />
              </div>
              <Stack>
                <SecretBox updateSecret={updateSecret} secret={secret} />
                {comments?.map((comment, i) => (
                  <Comment
                    key={i}
                    comment={comment}
                    secret={secret}
                    delay={i}
                    handleDeleteComment={handleDeleteComment}
                  />
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
              </Stack>
              <Container className={classes.submitBox}>
                <Button
                  disabled={!postCommentText.length}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitComment}
                >
                  Submit Comment
                </Button>
                {/* <SecretBox updateSecret={updateSecret} secret={secret} /> */}
              </Container>
            </Stack>
          </Stack>
        </Grid>
      ) : (
        <LoadingIcon height={"30rem"} />
      )}
    </CssBaseline>
  );
}
