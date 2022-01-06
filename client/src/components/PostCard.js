import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MiniThread from "./MiniThread";
import LoadingIcon from "./LoadingPageIcon";
import { Link } from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ImageCircle from "./ImageCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "99vw",

    marginBottom: "3%",
    padding: 10,
    height: 300,
    width: "100%",
    margin: 10,
  },
  // media: {
  //   height: 0,
  //   paddingTop: "56.25%", // 16:9
  // },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
  img: {
    // paddingTop: "10%", // 16:9
    // paddingBottom: "5%",
    paddingLeft: "1%", // 16:9
    // padding: "10%",
    // maxWidth: 250,
    // maxHeight: 50,
    // width: "10vw",
    // height: "20%",
    // objectFit: "cover",
    // maxHeight: 300,
  },
  imgAVI: {
    height: 50,
    width: 50,
  },
}));

export default function PostCard({ data, secret, onDelete }) {
  // console.log(data);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [forumData, setForumData] = React.useState();

  const handleDelete = function (e) {
    onDelete(data);
  };

  const handleExpandClick = () => {
    // check if data already exists
    if (!forumData) {
      fetch(`/api/threads/${data.publicTopic}/${data.url}`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setForumData(result);
        });
    }
    console.log(data);
    // load in data if not
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id={data.id}>
      <CardActionArea
        component={RouteLink}
        to={`/${
          data.postType == "public"
            ? `public/${data.publicTopic}`
            : "@" + data.username
        }/${data.url}`}
      >
        <CardHeader
          avatar={
            <Avatar
              // color={classes.red}
              // aria-label="recipe"
              variant="rounded"
              className={classes.avatar}
            >
              {data.avi ? (
                <img src={data.avi} className={classes.imgAVI}></img>
              ) : (
                data.username.slice(0, 1)
              )}
            </Avatar>
          }
          title={data.url.slice(0, -5) + " to " + data.publicTopic}
          to={"/"}
          subheader={data.creationDate}
        />
        <CardMedia>
          {data.image ? (
            <ImageCircle
              className={classes.imgcir}
              imageLink={data.image}
              size={200}
              alt={"error"}
              square
            ></ImageCircle>
          ) : (
            // <img className={classes.img} src={data.image}></img>
            // <CardMedia className={classes.img} image={data.image} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.subtitle}
              </Typography>
            </CardContent>
          )}
        </CardMedia>
      </CardActionArea>

      <CardActions disableSpacing>
        {/* <IconButton color="primary" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton onClick={handleDelete} color="primary" aria-label="share">
          <DeleteForeverRoundedIcon />
        </IconButton>

        <IconButton
          color="primary"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {forumData?.comments ? (
          <MiniThread secret={secret} comments={forumData?.comments || []} />
        ) : (
          <LoadingIcon height={"10rem"} />
        )}
      </Collapse>
    </Card>
  );
}
