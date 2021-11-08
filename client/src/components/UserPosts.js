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
  },
}));

export default function UserPosts({ posts, secret, onDelete }) {
  const classes = useStyles();
  //   const [createdPosts, setCreatedPosts] = useState(posts);
  return (
    <div className={classes.root}>
      <Grid>
        {posts
          ? posts.map((post, i) => (
              <PostCard
                key={i}
                secret={secret}
                data={post}
                onDelete={onDelete}
              />
            ))
          : "No Posts for this user"}
      </Grid>
    </div>
  );
}
