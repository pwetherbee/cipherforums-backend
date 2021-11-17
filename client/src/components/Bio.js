import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import LoadingIcon from "./LoadingPageIcon";
import { Link as RouteLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1800,
    // marginLeft: 30,
    marginTop: 30,
    // height: 200,
    minWidth: 300,
    padding: 5,
    display: "block",
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
    display: "inline-flex",
    maxWidth: 100,
    maxHeight: 100,
  },
  avi: {
    display: "inline-flex",
    justifyContent: "space-between",
    marginRight: 20,
  },
  desc: {
    display: "inline-flex",
    justifyContent: "space-between",
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Bio({ profile, currUser, canFollow }) {
  const classes = useStyles();
  const handleFollow = async () => {
    const res = await fetch("/api/following", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: profile?.username,
      }),
    });
    if (!res || res.status !== 200) {
      throw "error following";
      return;
    }
    const data = await res.json();
    if (!data.success) {
      return alert(data.message);
    }
    alert(data.message);
    canFollow = false;
  };
  //   const [profile, setProfile] = useState(user);
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        {profile?.username ? (
          <div>
            <CardContent className={classes.desc}>
              {/* <Card className={classes.avi}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={profile?.pic || "https://i.imgur.com/jlZySn6.jpeg"}
                />
              </Card>
              avatar= */}
              {
                <Avatar
                  // color={classes.red}
                  // aria-label="recipe"
                  variant="rounded"
                  className={classes.avatar}
                >
                  {profile?.pic ? (
                    <img
                      className={classes.img}
                      alt="complex"
                      src={profile.pic}
                    />
                  ) : (
                    profile.username.slice(0, 1)
                  )}
                </Avatar>
              }
              {/* <Card className={classes.avi}> */}
              <Typography gutterBottom variant="h5" component="h2">
                @{profile?.username || "user not found"}
                {profile?.currUser ||
                  (profile?.loggedIn &&
                    (!profile?.isFollowing ? (
                      <Button
                        size="small"
                        color="primary"
                        onClick={handleFollow}
                      >
                        Follow
                      </Button>
                    ) : (
                      "✔"
                    )))}
                {currUser ? (
                  <Button
                    size="small"
                    color="primary"
                    component={RouteLink}
                    to="/settings"
                  >
                    edit
                  </Button>
                ) : (
                  ""
                )}
              </Typography>
              {/* </Card> */}
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {profile?.bio || "this user has no bio"}
              </Typography>
            </CardContent>
          </div>
        ) : (
          <LoadingIcon height={"10rem"} />
        )}
      </Paper>
    </React.Fragment>
  );
}
