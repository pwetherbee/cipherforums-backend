import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import Post from "./Post-OLD";
import PostCard from "./PostCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width: "98%",
    // display: "inline-flex",
    // flexWrap: "wrap",
    // textAlign: "center",
    // marginLeft: -50,
    // overflowWrap: "break-word",
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   margin: "auto",
  //   maxWidth: 500,
  // },
  // image: {
  //   width: 128,
  //   height: 128,
  // },
  // img: {
  //   margin: "auto",
  //   display: "block",
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  //   padding: "10px",
  // },
}));

export default function UserPosts({ posts, secret, onDelete }) {
  const classes = useStyles();
  const [value, setValue] = useState("grid");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  //   const [createdPosts, setCreatedPosts] = useState(posts);
  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="grid" control={<Radio />} label="Grid" />
            <FormControlLabel value="list" control={<Radio />} label="List" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {posts
          ? posts.map((post, i) => (
              <Grid
                key={i}
                item
                xs={12}
                md={value == "list" ? 12 : 6}
                xl={value == "list" ? 12 : 4}
              >
                <PostCard secret={secret} data={post} onDelete={onDelete} />
              </Grid>
            ))
          : "No Posts for this user"}
      </Grid>
    </div>
  );
}
