import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Comment } from "../components/Comment";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { fetchOBJKTDetails, generateThumbnailCR } from "../helpers/hicdex.js";
import { query } from "../helpers/api.js";
import { ImageGroup, Image } from "react-fullscreen-image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: 80,
    width: "99%",
    paddingLeft: "1%",
  },
  paper: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    // width: "400px",
    // height: "400px",
    textAlign: "center",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    // borderWidth: 2,
    // borderRadius: 10,
    // borderColor: theme.palette.text.secondary,
    // borderStyle: "solid",
    verticalAlign: "middle",
    padding: 10,
  },
  img: {
    paddingTop: 20,
    height: "70vmin",
  },

  footer: {
    display: "flex",
    justifyContent: "left",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  address: {
    justifyContent: "left",
    // padding: 0,
    // paddingLeft: 20,
    minHeight: 1,
  },
  comment: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
}));

export default function Public() {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [nft, setNFT] = useState({});
  const [postCommentText, setPostCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const handleDeleteComment = () => {};
  const handleSubmitComment = async () => {
    const data = await query(`/api/comments?nftID=${id}&chainType=${"tz"}`, {
      text: postCommentText,
    });
    if (!data.success) {
      return alert(data.message);
    }
    setPostCommentText("");
  };
  useEffect(async () => {
    const data = await fetchOBJKTDetails(id);
    console.log(data);
    const commentData = await query(
      `/api/comments?nftID=${id}&chainType=${"tz"}`
    );
    console.log(commentData);
    setComments(commentData.data);
    setNFT(data);
    // query api for comments relating to nft
  }, []);
  const classes = useStyles();
  // const gg = ("https://ipfs.io/ipfs/" +((nft.artifact_uri).split("//").slice(-1)[0]));
  return (
    <Container>
      <Grid item xs={12} sm={12}>
        <Paper className={classes.paper}>
          <img
            className={classes.img}
            src={nft.display_uri && generateThumbnailCR(nft.display_uri)}
          />
        </Paper>
        <Paper className={classes.paper}>
          <video width="750" height="500" controls>
            <source
              src={nft.artifact_uri && generateThumbnailCR(nft.artifact_uri)}
              type="video/mp4"
            />
          </video>
        </Paper>
        <Toolbar className={classes.footer}>
          <Typography variant="h3">{nft.title}</Typography>
        </Toolbar>
        <Toolbar className={classes.footer}>
          <Typography variant="comment">{nft.description}</Typography>
        </Toolbar>
        <Toolbar className={classes.address}>
          <Typography className={classes.footer} variant="comment">
            by {nft.creator?.name || nft.creator?.address}
          </Typography>
        </Toolbar>
        {comments?.map((comment) => (
          <Comment
            comment={comment}
            secret={null}
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
      </Grid>
    </Container>
  );
}
