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
import { Grid, Paper } from "@material-ui/core";
import LoadingIcon from "./LoadingPageIcon";
import { Link as RouteLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ImageCircle from "./ImageCircle";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1600,
    marginLeft: 0,
    marginTop: 30,
    // height: 200,
    minWidth: 300,
    // padding: 5,
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
    // marginRight: 20,
  },
  desc: {
    display: "inline-flex",
    justifyContent: "space-between",
    // padding: 10,
  },
  // avatar: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: theme.palette.background.paper,
  // },
  usr: {
    display: "inline-flex",
    // marginTop: 10,y

    // padding: 10,
    marginLeft: 20,
  },
  follow: {
    marginLeft: 20,
  },
  icon: {
    margin: 5,
    marginLeft: 10,
  },
  icon2: {
    margin: 5,
    marginLeft: 0,
  },
  check: {
    marginTop: 5,
  },
  desc2: {
    // width: 1200,
    // margin: "auto",
    height: "60vh",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15vh",
    // width: "70%",
  },
  iconb: {
    position: "absolute",
    right: 50,
    top: 50,
    transform: "scale(1.8)",
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   const [profile, setProfile] = useState(user);
  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.root}>
        {profile?.username ? (
          <div>
            <Grid item xs={12}>
              <CardContent className={classes.desc}>
                {/* <Card className={classes.avi}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={profile?.pic || "https://i.imgur.com/jlZySn6.jpeg"}
                />
              </Card>
              avatar= */}
                {profile?.pic ? (
                  <div>
                    <Button onClick={handleOpen}>
                      <ImageCircle
                        imageLink={profile.pic}
                        size={150}
                        alt={profile.username}
                        square
                      ></ImageCircle>
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <div onClick={handleClose}>
                          <CloseIcon className={classes.iconb} />
                        </div>
                        <img className={classes.desc2} src={profile.pic} />
                      </Box>
                    </Modal>
                  </div>
                ) : (
                  <Avatar>{profile.username.slice(0, 2)}</Avatar>
                )}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {profile?.bio || "this user has no bio"}
                  </Typography>
                </CardContent>

                {/* <Card className={classes.avi}> */}

                {/* </Card> */}
              </CardContent>
            </Grid>
          </div>
        ) : (
          <LoadingIcon height={"10rem"} />
        )}
      </Grid>
      <Grid item xs={12} className={classes.usr}>
        <Typography gutterBottom variant="h5" component="h2">
          @{profile?.username || "user not found"}
          {profile?.currUser ||
            (profile?.loggedIn &&
              (!profile?.isFollowing ? (
                <Button
                  className={classes.follow}
                  size="small"
                  color="primary"
                  onClick={handleFollow}
                >
                  Follow
                </Button>
              ) : (
                <Typography
                  className={classes.check}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  ✔
                </Typography>
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
        <TwitterIcon className={classes.icon} />
        <LanguageIcon className={classes.icon2} />
      </Grid>
    </React.Fragment>
  );
}
