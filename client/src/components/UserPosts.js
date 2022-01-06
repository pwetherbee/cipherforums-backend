import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import Post from "./Post-OLD";
import PostCard from "./PostCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "85vw",
    display: "inline-flex",
    flexWrap: "wrap",
    textAlign: "center",
    // marginLeft: -50,
    // overflowWrap: "break-word",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    padding: "10px",
  },
}));

export default function UserPosts({ posts, secret, onDelete }) {
  const classes = useStyles();
  //   const [createdPosts, setCreatedPosts] = useState(posts);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {posts
          ? posts.map((post, i) => (
              <Grid item xs={12} md={6} lg={4}>
                <PostCard
                  key={i}
                  secret={secret}
                  data={post}
                  onDelete={onDelete}
                />
              </Grid>
            ))
          : "No Posts for this user"}
      </Grid>
    </div>
  );
}
