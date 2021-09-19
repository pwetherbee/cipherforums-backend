import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderTopWidth: 3,
    borderColor: theme.palette.text.secondary,
    borderStyle: "solid",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/business"> */}
            <Paper className={classes.paper}>
              <MonetizationOnOutlinedIcon style={{ fontSize: 200 }} />
              <Typography>Business</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/images"> */}
            <Paper className={classes.paper}>
              <CameraSharpIcon style={{ fontSize: 200 }} />
              <Typography>Images</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/politics"> */}
            <Paper className={classes.paper}>
              <GavelSharpIcon style={{ fontSize: 200 }} />
              <Typography>Politics</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/technology"> */}
            <Paper className={classes.paper}>
              <ComputerIcon style={{ fontSize: 200 }} />
              <Typography>Technology</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/news"> */}
            <Paper className={classes.paper}>
              <AnnouncementRoundedIcon style={{ fontSize: 200 }} />
              <Typography>News</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/gaming"> */}
            <Paper className={classes.paper}>
              <GamesOutlinedIcon style={{ fontSize: 200 }} />
              <Typography>Gaming</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/music"> */}
            <Paper className={classes.paper}>
              <AlbumSharpIcon style={{ fontSize: 200 }} />
              <Typography>Music</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/science"> */}
            <Paper className={classes.paper}>
              <EcoRoundedIcon style={{ fontSize: 200 }} />
              <Typography>Science</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/questions"> */}
            <Paper className={classes.paper}>
              <HelpOutlineSharpIcon style={{ fontSize: 200 }} />
              <Typography>Questions</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/outdoors"> */}
            <Paper className={classes.paper}>
              <FilterHdrIcon style={{ fontSize: 200 }} />
              <Typography>Outdoors</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/puzzles"> */}
            <Paper className={classes.paper}>
              <ExtensionSharpIcon style={{ fontSize: 200 }} />
              <Typography>Puzzles</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/witing"> */}
            <Paper className={classes.paper}>
              <CreateSharpIcon style={{ fontSize: 200 }} />
              <Typography>Writing</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/travel"> */}
            <Paper className={classes.paper}>
              <FlightTakeoffIcon style={{ fontSize: 200 }} />
              <Typography>Travel</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/sports"> */}
            <Paper className={classes.paper}>
              <SportsSharpIcon style={{ fontSize: 200 }} />
              <Typography>Sports</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/pubforum">
            {/* <Link href="/public/comedy"> */}
            <Paper className={classes.paper}>
              <MoodSharpIcon style={{ fontSize: 200 }} />
              <Typography>Comedy</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
