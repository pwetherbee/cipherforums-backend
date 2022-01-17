import { generateThumbnailCR } from "../helpers/hicdex.js";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import LoadingIcon from "./LoadingPageIcon.js";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import "@google/model-viewer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    // padding: 80,
    width: "100%",
    paddingBottom: 20,
  },
  img: {
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
  model: {
    // backgroundColor: "red",
    paddingTop: 20,
    height: "800px",
    width: "800px",
    border: "none",
  },
}));
function Media(props) {
  const { nft } = props;
  console.log(nft);
  useEffect(() => {
    if (nft.mime?.startsWith("model")) {
      setLoading(false);
    }
  }, [nft]);
  const [loading, setLoading] = useState(true);
  // figure out the media type
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loading && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            height: "70vmin",
            width: "70vmin",
            backgroundImage: `url(${
              nft.display_uri && generateThumbnailCR(nft.display_uri)
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <LinearProgress style={{ width: "70vmin" }} />
          <div
            style={{
              filter: "blur(5px)",
              height: "70vmin",
              width: "70vmin",
              background: "rgba(0,0,0, 0.3)",
            }}
          ></div>
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
          <Container>
            <model-viewer
              className={classes.model}
              style={{
                width: "80vmin",
                height: "80vmin",
                margin: "auto",
              }}
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
          </Container>
        </div>
      )}
    </div>
  );
}

export default Media;
