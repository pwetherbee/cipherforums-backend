import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import { Link as RouteLink, useParams } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  fetchCollectedOBJKTs,
  fetchCreatedOBJKTs,
  generateThumbnailCR,
} from "../helpers/hicdex.js";

function TabPanel(props) {
  const { children, value, index } = props;
  return <div hidden={value !== index}>{children}</div>;
}

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
    maxHeight: 400,
  },
  img: {
    width: "100%",
  },
  info: {
    textAlign: "left",
    padding: 10,
    paddingLeft: 20,
    paddingTop: 40,
    overflowWrap: "anywhere",
  },
  info2: {
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 40,
  },
}));

const displayTypes = ["created", "collected"];

export default function AutoGrid() {
  let { address } = useParams();
  const [nfts, setNFTs] = useState([]);
  const [collectedNFTs, setCollectedNFTs] = useState([]);
  const [createdNFTs, setCreatedNFTs] = useState([]);
  const [display, setDisplay] = useState("created");
  const [tab, setTab] = useState(0);
  const toggleDisplay = async () => {
    //TODO: migrate to tab change function
    setDisplay(display == "created" ? "collected" : "created");
    if (!collectedNFTs.length) {
      const collected = await fetchCollectedOBJKTs(address);
      setCollectedNFTs(collected);
    }
    console.log(display);
  };

  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
    toggleDisplay();
  };

  const classes = useStyles();
  useEffect(async () => {
    document.title = `Cipherforums | ${address}`;
    const created = await fetchCreatedOBJKTs(address);
    console.log(created);
    setCreatedNFTs(created);
  }, [address]);
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.info}>
        {address}
      </Typography>
      <Typography variant="subtitle1" className={classes.info2}>
        There is currently no cipherforums account linked to this wallet.
      </Typography>
      <Grid item xs={12}>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Created"></Tab>
          <Tab label="Collected"></Tab>
        </Tabs>
        <TabPanel value={tab} index={0}>
          <Grid container spacing={0}>
            {createdNFTs.map((createdNFTs) => (
              <Grid key={createdNFTs.id} item xs={12} sm={3}>
                <Paper className={classes.paper}>
                  <RouteLink
                    to={`/tz/nft/${createdNFTs.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      className={classes.img}
                      src={generateThumbnailCR(createdNFTs.display_uri)}
                    ></img>
                  </RouteLink>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Grid container spacing={0}>
            {collectedNFTs.map((collectedNFTs) => (
              <Grid key={collectedNFTs.token.id} item xs={12} sm={3}>
                <Paper className={classes.paper}>
                  <RouteLink
                    to={`/tz/nft/${collectedNFTs.token.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      className={classes.img}
                      src={generateThumbnailCR(collectedNFTs.token.display_uri)}
                    ></img>
                  </RouteLink>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Grid>
    </div>
  );
}
