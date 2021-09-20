import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
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
    color: "#ffffff",
    padding: 14,
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
    maxHeight: 150,
    maxWidth: 180,
    minHeight: 50,
    padding: 0,
  },
  card__actions: {
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  create: {
    marginTop: 10,
    marginLeft: 10,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.root} variant="h3">
          Business
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button className={classes.create} variant="contained" color="primary">
          Create public forum
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <img
              className={classes.img}
              alt="complex"
              src="https://i.imgur.com/AD3MbBi.jpeg"
            />
            <CardContent className={classes.content}>
              <Typography variant="caption">@username</Typography>
              <Typography variant="body2">
                1500s, when an unknown 1500s, when an unknown pp
              </Typography>
              <div className={classes.card__actions}>
                <Typography className={classes.card__actions} variant="caption">
                  100 comments
                </Typography>
              </div>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
