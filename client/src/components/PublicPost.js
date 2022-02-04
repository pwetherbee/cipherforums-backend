import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImageCircle from "./ImageCircle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@material-ui/core/Button";
import ImageModal from "./imageModal";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    border: "1px solid",
    borderColor: theme.palette.primary.main3,
    // color: "#ffffff",
  },
  title: {
    marginLeft: 20,
  },
  details: {
    display: "inline-flex",
    flexDirection: "row",
    // padding: 20,
  },
  content: {
    // flex: "1 0 auto",
    overflowWrap: "break-word",
    color: "primary",
    // padding: 5,
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  img: {
    padding: 10,
    width: 150,
  },
  card__actions: {
    marginTop: 10,
  },
  create: {
    marginTop: 10,
    marginLeft: 10,
  },
  type: {
    overflowWrap: "break-word",
    width: "100%",
    height: "5rem",
    overflowY: "hidden",
  },
  desc: {
    // width: 1200,
    // margin: "auto",
    height: "70vh",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10vh",
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
export const PublicPost = ({ details, topic }) => {
  const classes = useStyles();
  // console.log(details);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} key={details.id}>
      <Card className={classes.root}>
        {/* <div className={classes.details}> */}
        <Stack spacing={1} direction="row">
          <div className={classes.img}>
            <Button onClick={handleOpen}>
              <ImageCircle
                imageLink={details.image || "https://i.imgur.com/Ck4MLYV.jpg"}
                size={150}
                square
              ></ImageCircle>
            </Button>
            <ImageModal open={open} onClose={handleClose} src={details.image} />
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <div onClick={handleClose}>
                  <CloseIcon className={classes.icon} />
                </div>
                <img className={classes.desc} src={details.image} />
              </Box>
            </Modal> */}
          </div>
          {/* <img
                className={classes.img}
                alt="complex"
                src={details.image || "https://i.imgur.com/AD3MbBi.jpeg"}
              /> */}
          <Stack
            spacing={1}
            direction="column"
            justifyContent="space-between"
            paddingLeft={1}
          >
            <Stack spacing={1} direction="row" padding={1}>
              {/* <CardContent className={classes.content}> */}
              <RouteLink to={`/@${details.username}`} style={linkStyle}>
                <Link>
                  <Typography variant="body1">@{details.username}</Typography>
                </Link>
              </RouteLink>
              <RouteLink
                to={`/public/${topic}/${details.url}`}
                style={linkStyle}
              >
                <Link>
                  <Typography variant="body1" className={classes.type}>
                    {details.url.slice(0, -5)}
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
              spacing={1}
              padding={1}
            >
              <FavoriteBorderIcon></FavoriteBorderIcon>
              {/* <FavoriteIcon></FavoriteIcon> */}
              <Typography className={classes.card__actions} variant="caption">
                {details.numComments} comments
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};
