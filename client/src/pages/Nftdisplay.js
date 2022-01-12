import React, { useEffect, useState } from "react";
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
import { Link as RouteLink, useParams } from "react-router-dom";
import { fetchCreatedOBJKTs, generateThumbnailCR } from "../helpers/hicdex.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: 80,
    width: "99%",
    paddingLeft: "1%",
  },
  paper: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    // width: "400px",
    // height: "400px",
    textAlign: "center",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    // borderWidth: 2,
    // borderRadius: 10,
    // borderColor: theme.palette.text.secondary,
    // borderStyle: "solid",
    verticalAlign: "middle",
    padding: 10,
  },
  img: {
    width: "100%",
  },
  info: {
    textAlign: "left",
    padding: 10,
    paddingLeft: 20,
    paddingTop: 40,
  },
  info2: {
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 40,
  },
}));

export default function AutoGrid() {
  let { address } = useParams();
  const [nfts, setNfts] = useState([]);
  const classes = useStyles();
  useEffect(async () => {
    document.title = "Cipherforums | Public Topics";
    const created = await fetchCreatedOBJKTs(address);
    console.log(created);
    console.log(generateThumbnailCR(created[0].display_uri));
    setNfts(created);
  }, []);
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h4" className={classes.info}>
        {address}
      </Typography>
      <Typography component="h1" className={classes.info2}>
        There is currently no cipherforums account linked to this wallet.
      </Typography>
      <Grid container spacing={4}>
        {nfts.map((nft) => (
          <Grid key={nft.id} item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <img
                className={classes.img}
                src={generateThumbnailCR(nft.display_uri)}
              ></img>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
