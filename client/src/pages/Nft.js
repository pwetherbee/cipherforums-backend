import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Button, IconButton, Box } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import { Comment } from "../components/Comment";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { fetchOBJKTDetails, generateThumbnailCR } from "../helpers/hicdex.js";
import { query } from "../helpers/api.js";
import Media from "../components/Media";
import ConfirmDelete from "../components/ConfirmDelete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as RouteLink } from "react-router-dom";
import LoadingIcon from "../components/LoadingPageIcon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
    height: "70vmin",
    padding: 10,
    marginBottom: 40,
  },
  img: {
    paddingTop: 20,
    height: "70vmin",
  },

  footer: {
    display: "flex",
    justifyContent: "left",
    // marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    // marginTop: 20,
    color: theme.palette.primary.main,
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
  linked: {
    color: theme.palette.primary.main,
    // marginLeft: 30,
    // marginTop: 20,
  },
}));
function TabPanel(props) {
  const { children, value, index } = props;
  return <div hidden={value !== index}>{children}</div>;
}

export default function Public() {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [nft, setNFT] = useState({});
  const [postCommentText, setPostCommentText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const { id } = useParams();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [deleteCommentData, setDeleteCommentData] = useState({});
  const [tab, setTab] = useState(0);
  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
  };
  const handleToggleLike = async () => {
    // make fetch request
    if (!isLiked) {
      const data = await query(`/api/likes?nftID=${id}&chainType=${"tz"}`, {
        displayURI: nft.display_uri,
      });
      if (data.success) {
        setIsLiked(true);
        setLikeCount(likeCount + 1);
      }
    } else {
      const res = await fetch(`/api/likes?nftID=${id}&chainType=${"tz"}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success) {
        setIsLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };
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
    const likeStatus = await query(
      `/api/likes/check?nftID=${id}&chainType=${"tz"}`
    );
    setIsLiked(likeStatus.isLiked);
    const data = await fetchOBJKTDetails(id);
    console.log(data);
    const commentData = await query(
      `/api/comments?nftID=${id}&chainType=${"tz"}`
    );
    const { count } = await query(
      `/api/likes/count?nftID=${id}&chainType=${"tz"}`
    );
    setLikeCount(count);
    setComments(commentData.data);
    setNFT(data);
    document.title = `Cipherforums | ${data.title}`;
    // query api for comments relating to nft
  }, []);
  const classes = useStyles();

  const handleDeleteComment = (data) => () => {
    console.log(data);
    setOpenConfirmDelete(true);
    setDeleteCommentData(data);
  };
  const handleDecision = (decision) => async () => {
    if (decision === "agree") {
      console.log("deleting comment");
      console.log(deleteCommentData);
      // make fetch to delete
      const res = await fetch("/api/comments", {
        method: "DELETE",
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
  if (!nft || !likeCount)
    return (
      <div>
        <div style={{ marginTop: "20%" }}></div>
        <LoadingIcon />
      </div>
    );
  return (
    <Container>
      <ConfirmDelete
        open={openConfirmDelete}
        handleDecision={handleDecision}
        handleClose={handleCloseConfirmDelete}
      />
      <Grid item xs={12} sm={12}>
        <Box className={classes.paper}>
          <Media nft={nft}></Media>
        </Box>
        <Toolbar className={classes.footer}>
          <Typography variant="h5">{nft.title}</Typography>
        </Toolbar>
        <Toolbar className={classes.footer}>
          <Typography variant="body" style={{ whiteSpace: "pre-line" }}>
            {nft.description}
          </Typography>
        </Toolbar>
        <Toolbar className={classes.address}>
          <RouteLink
            to={`/tz/${nft.creator?.address}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography className={classes.footer} variant="subtitle2">
              by {nft.creator?.name || nft.creator?.address}
            </Typography>
          </RouteLink>
        </Toolbar>

        <Toolbar className={classes.footer}>
          <IconButton
            className={classes.linked}
            disabled={!nft.display_uri}
            onClick={handleToggleLike}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{likeCount}</Typography>
        </Toolbar>

        <br />
        <br />

        <Grid item xs={12}>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Comments"></Tab>
            <Tab label="Owners"></Tab>
            <Tab label="History"></Tab>
          </Tabs>
        </Grid>

        <Divider></Divider>
        <Toolbar className={classes.address}>
          <Typography className={classes.footer}>Comments</Typography>
        </Toolbar>

        {comments?.map((comment, i) => (
          <Comment
            key={i}
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
