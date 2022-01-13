import { generateThumbnailCR } from "../helpers/hicdex.js";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import LoadingIcon from "./LoadingPageIcon.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: 80,
    width: "99%",
    paddingLeft: "1%",
  },
  img: {
    paddingTop: 20,
    height: "70vmin",
  },
  iframe: {
    paddingTop: 20,
    height: "70vmin",
    width: "70vmin",
    border: "none",
  },
}));
function Media(props) {
  const { nft } = props;

  const [loading, setLoading] = useState(true);
  // figure out the media type
  const classes = useStyles();
  return (
    <div>
      {loading && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30vh",
          }}
        >
          <LoadingIcon />
        </div>
      )}
      {nft.mime?.startsWith("video") && (
        <video
          onLoad={() => setLoading(false)}
          width="750"
          height="500"
          controls
        >
          <source src={generateThumbnailCR(nft.artifact_uri)} type={nft.mime} />
        </video>
      )}
      {nft.mime?.startsWith("image") && (
        <img
          onLoad={() => setLoading(false)}
          className={classes.img}
          src={nft.artifact_uri && generateThumbnailCR(nft.artifact_uri)}
        />
      )}
      {nft.mime?.startsWith("application/x-directory") && (
        <iframe
          onLoad={() => setLoading(false)}
          className={classes.iframe}
          title="html-embed"
          src={nft.artifact_uri && generateThumbnailCR(nft.artifact_uri)}
        ></iframe>
      )}
    </div>
  );
}

export default Media;
