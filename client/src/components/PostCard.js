import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@mui/material/CardMedia";
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
import { Grid, Link, Toolbar } from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ImageCircle from "./ImageCircle";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "99vw",

    // marginBottom: "3%",
    padding: 10,
    // height: 350,
    margin: 10,
    textAlign: "left",
    border: "1px solid",
    borderColor: theme.palette.primary.main3,
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
  imgcir: {
    marginLeft: 140,
  },
  delete: {},
  card__actions: {
    marginLeft: 20,
  },
  desc: {
    // width: 1200,
    // margin: "auto",
    height: "60vh",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15vh",
    // width: "70%",
  },
  icon: {
    position: "absolute",
    right: 50,
    top: 50,
    transform: "scale(1.8)",
  },
}));
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // <Card className={classes.root} id={data.id}>
    //   <CardActionArea
    //     component={RouteLink}
    // to={`/${
    //   data.postType == "public"
    //     ? `public/${data.publicTopic}`
    //     : "@" + data.username
    // }/${data.url}`}
    //   >
    //     <CardHeader
    //       title={data.url.slice(0, -5) + " to " + data.publicTopic}
    //       to={"/"}
    //       subheader={data.creationDate}
    //     />
    //     <CardMedia className={classes.imgcir}>
    //       {data.image ? (
    //         <ImageCircle
    //           imageLink={data.image}
    //           size={180}
    //           alt={"error"}
    //           square
    //         ></ImageCircle>
    //       ) : (
    //         <CardContent>
    //           <Typography variant="body2" color="textSecondary" component="p">
    //             {data.subtitle}
    //           </Typography>
    //         </CardContent>
    //       )}
    //       <br></br>
    //     </CardMedia>
    //   </CardActionArea>

    //   <CardActions disableSpacing>
    //     <IconButton
    //       onClick={handleDelete}
    //       color="primary"
    //       aria-label="share"
    //       className={classes.delete}
    //     >
    //       <DeleteForeverRoundedIcon />
    //     </IconButton>
    //   </CardActions>
    // </Card>
    <Card className={classes.root} id={data.id}>
      <Box sx={4}>
        {/* <div className={classes.details}> */}
        <Stack spacing={1} direction="row">
          <div className={classes.img}>
            <Button onClick={handleOpen}>
              <ImageCircle
                imageLink={data.image || "https://i.imgur.com/Ck4MLYV.jpg"}
                size={150}
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
                  <CloseIcon className={classes.icon} />
                </div>
                <img className={classes.desc} src={data.image} />
              </Box>
            </Modal>
          </div>
          {/* </Stack> */}
          <Stack spacing={1} direction="column" justifyContent="space-between">
            <Stack spacing={1} direction="row" padding={1}>
              {/* <CardContent className={classes.content}> */}
              {/* <Typography variant="caption">@{data.username}</Typography> */}
              <RouteLink
                to={`/${
                  data.postType == "public"
                    ? `public/${data.publicTopic}`
                    : "@" + data.username
                }/${data.url}`}
                style={linkStyle}
              >
                <Link>
                  <Typography variant="body2" className={classes.type}>
                    {data.url.slice(0, -5)}
                  </Typography>
                </Link>
              </RouteLink>
              {/* </CardContent> */}
            </Stack>
            {/* </div> */}
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
              spacing={0}
              padding={0}
            >
              <Toolbar>
                <IconButton
                  onClick={handleDelete}
                  color="primary"
                  aria-label="share"
                  className={classes.delete}
                >
                  <DeleteForeverRoundedIcon />
                </IconButton>
                <FavoriteBorderIcon></FavoriteBorderIcon>
                {/* <FavoriteIcon></FavoriteIcon> */}
                <RouteLink
                  to={`/${
                    data.postType == "public"
                      ? `public/${data.publicTopic}`
                      : "@" + data.username
                  }/${data.url}`}
                  style={linkStyle}
                >
                  <Link>
                    <Typography
                      className={classes.card__actions}
                      variant="caption"
                    >
                      {data.numComments} comments
                    </Typography>
                  </Link>
                </RouteLink>
              </Toolbar>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
