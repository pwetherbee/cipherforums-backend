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
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MiniThread from "./MiniThread";
import LoadingIcon from "./LoadingPageIcon";
import { Link } from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    marginBottom: "3%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
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
}));

export default function PostCard({ data, secret }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [forumData, setForumData] = React.useState();

  const handleExpandClick = () => {
    // check if data already exists
    if (!forumData) {
      fetch(`/api/threads/${data.url}`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setForumData(result);
        });
    }
    // load in data if not
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea
        component={RouteLink}
        to={`/user/${data.username}/post/${data.url}`}
      >
        <CardHeader
          avatar={
            <Avatar
              color={classes.red}
              aria-label="recipe"
              variant="rounded"
              className={classes.avatar}
            >
              {data.username.slice(0, 1)}
            </Avatar>
          }
          title={data.url}
          to={"/"}
          subheader={data.creationDate}
        />
        <CardMedia>
          {data.image ? (
            <CardMedia
              className={classes.media}
              image={data.image}
              title="Paella dish"
            />
          ) : (
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.subtitle}
              </Typography>
            </CardContent>
          )}
        </CardMedia>
      </CardActionArea>

      <CardActions disableSpacing>
        <IconButton color="primary" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="primary" aria-label="share">
          <ShareIcon />
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
