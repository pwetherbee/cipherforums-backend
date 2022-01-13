import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import { Typography } from "@material-ui/core";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import CameraSharpIcon from "@material-ui/icons/CameraSharp";
import GavelSharpIcon from "@material-ui/icons/GavelSharp";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ComputerIcon from "@material-ui/icons/Computer";
import ExtensionSharpIcon from "@material-ui/icons/ExtensionSharp";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import SportsSharpIcon from "@material-ui/icons/SportsSharp";
import MoodSharpIcon from "@material-ui/icons/MoodSharp";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutlineSharp";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import AlbumSharpIcon from "@material-ui/icons/AlbumSharp";
import AnnouncementRoundedIcon from "@material-ui/icons/AnnouncementRounded";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 80,
  },
  paper: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    // width: "400px",
    // height: "400px",
    textAlign: "center",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,

    borderWidth: 2,
    borderRadius: 10,

    borderColor: theme.palette.text.secondary,
    borderStyle: "solid",
    verticalAlign: "middle",
  },
  icon: {
    fontSize: "8vw",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Cipherforums | Public Topics";
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Link to="/public/Business" component={RouteLink}>
            {/* <Link to="/public/business"> */}
            <Paper className={classes.paper}>
              <MonetizationOnOutlinedIcon className={classes.icon} />
              <Typography>Business</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Images" component={RouteLink}>
            {/* <Link to="/public/images"> */}
            <Paper className={classes.paper}>
              <CameraSharpIcon className={classes.icon} />
              <Typography>Images</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Politics" component={RouteLink}>
            {/* <Link to="/public/politics"> */}
            <Paper className={classes.paper}>
              <GavelSharpIcon className={classes.icon} />
              <Typography>Politics</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Technology" component={RouteLink}>
            {/* <Link to="/public/technology"> */}
            <Paper className={classes.paper}>
              <ComputerIcon className={classes.icon} />
              <Typography>Technology</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/News" component={RouteLink}>
            {/* <Link to="/public/news"> */}
            <Paper className={classes.paper}>
              <AnnouncementRoundedIcon className={classes.icon} />
              <Typography>News</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Gaming" component={RouteLink}>
            {/* <Link to="/public/gaming"> */}
            <Paper className={classes.paper}>
              <GamesOutlinedIcon className={classes.icon} />
              <Typography>Gaming</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Music" component={RouteLink}>
            {/* <Link to="/public/music"> */}
            <Paper className={classes.paper}>
              <AlbumSharpIcon className={classes.icon} />
              <Typography>Music</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Science" component={RouteLink}>
            {/* <Link to="/public/science"> */}
            <Paper className={classes.paper}>
              <EcoRoundedIcon className={classes.icon} />
              <Typography>Science</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Questions" component={RouteLink}>
            {/* <Link to="/public/questions"> */}
            <Paper className={classes.paper}>
              <HelpOutlineSharpIcon className={classes.icon} />
              <Typography>Questions</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Outdoors" component={RouteLink}>
            {/* <Link to="/public/outdoors"> */}
            <Paper className={classes.paper}>
              <FilterHdrIcon className={classes.icon} />
              <Typography>Outdoors</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Puzzles" component={RouteLink}>
            {/* <Link to="/public/puzzles"> */}
            <Paper className={classes.paper}>
              <ExtensionSharpIcon className={classes.icon} />
              <Typography>Puzzles</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Writing" component={RouteLink}>
            {/* <Link to="/public/witing"> */}
            <Paper className={classes.paper}>
              <CreateSharpIcon className={classes.icon} />
              <Typography>Writing</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Travel" component={RouteLink}>
            {/* <Link to="/public/travel"> */}
            <Paper className={classes.paper}>
              <FlightTakeoffIcon className={classes.icon} />
              <Typography>Travel</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Sports" component={RouteLink}>
            {/* <Link to="/public/sports"> */}
            <Paper className={classes.paper}>
              <SportsSharpIcon className={classes.icon} />
              <Typography>Sports</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link to="/public/Comedy" component={RouteLink}>
            {/* <Link to="/public/comedy"> */}
            <Paper className={classes.paper}>
              <MoodSharpIcon className={classes.icon} />
              <Typography>Comedy</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
