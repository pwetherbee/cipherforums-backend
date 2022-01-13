import { generateThumbnailCR } from "../helpers/hicdex.js";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import LoadingIcon from "./LoadingPageIcon.js";
import "@google/model-viewer";
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
  canvas: {
    paddingTop: 20,
    height: "500px",
    width: "500px",
    border: "none",
  },
  modelHold: {
    // backgroundColor: "red",
    paddingTop: 20,
    height: "500px",
    width: "500px",
    border: "none",
  },
}));
function Media(props) {
  const { nft } = props;
  useEffect(() => {
    if (nft.mime?.startsWith("model")) {
      setLoading(false);
    }
  }, [nft]);
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
          onLoadStart={() => setLoading(false)}
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
      {nft.mime?.startsWith("model") && (
        <div className={classes.modelHold}>
          <model-viewer
            className={classes.model}
            onLoad={() => setLoading(false)}
            src={nft.artifact_uri && generateThumbnailCR(nft.artifact_uri)}
            autoplay="true"
            auto-rotate="true"
            data-js-focus-visible="true"
            interaction-prompt="none"
            ar="true"
            ar-modes="webxr scene-viewer quick-look"
            camera-controls="true"
            ar-status="not-presenting"
          ></model-viewer>
        </div>
      )}
    </div>
  );
}

export default Media;
