import { Grid, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { query } from "../helpers/api.js";
import { Link as RouteLink, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  fetchCollectedOBJKTs,
  fetchCreatedOBJKTs,
  generateThumbnailCR,
} from "../helpers/hicdex.js";
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
    width: "80%",
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

function LikedNFTs() {
  const classes = useStyles();
  let { username } = useParams();
  const [NFTs, setNFTs] = useState([]);
  useEffect(async () => {
    const data = await query(`/api/likes?username=${username}`);
    console.log(data.data);
    setNFTs(data.data);
  }, []);
  console.log(NFTs.length);
  return (
    <div>
      {NFTs.map((nft, i) => (
        <Grid key={nft.nftID} item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <RouteLink
              to={`/tz/nft/${nft.nftID}`}
              style={{ textDecoration: "none" }}
            >
              <img
                className={classes.img}
                src={generateThumbnailCR(nft.displayURI)}
              ></img>
            </RouteLink>
          </Paper>
        </Grid>
      ))}
    </div>
  );
}

export default LikedNFTs;
