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
    width: "94%",
    paddingLeft: "6%",
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
  history: {
    display: "inline-flex",
    padding: 2,
  },
  history2: {
    paddingLeft: 50,
  },
  infoTitle: {
    paddingBottom: 20,
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
    // console.log(display);
  };

  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
    toggleDisplay();
  };

  const classes = useStyles();
  useEffect(async () => {
    document.title = `Cipherforums | ${address}`;
    const created = await fetchCreatedOBJKTs(address);
    // console.log(created);
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
          <Tab label="info"></Tab>
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
        <TabPanel value={tab} index={2}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography className={classes.infoTitle} variant="h4">
                Latest sales
              </Typography>
              {createdNFTs.map((createdNFTs) => (
                <Grid item xs={12}>
                  <div className={classes.history}>
                    <div>{createdNFTs.id}</div>
                    <div>{createdNFTs.title} </div>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Total XTZ recieved</Typography>
              <div>45.4545 </div>
              <Typography variant="h6">Latest transaction</Typography>
              <div>2/5/22 </div>
              <Typography variant="h6">First transaction</Typography>
              <div>1/1/20 </div>
              <Typography variant="h6">Number of transactions</Typography>
              <div>43 </div>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Typography className={classes.infoTitle} variant="h4">
              {" "}
              Latest purchases{" "}
            </Typography>
          </Grid>
          {collectedNFTs.map((collectedNFTs) => (
            <div>{collectedNFTs.token.title} </div>
          ))}
        </TabPanel>
      </Grid>
    </div>
  );
}
