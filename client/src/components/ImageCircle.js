import { Grid, IconButton, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import sillouette from "../images/sillouette.png";

function ImageCircle(props) {
  const { children, imageLink, size, marginLeft, square } = props;
  return (
    <Box
      // onMouseEnter={() => setShowDeleteButton(true)}
      // onMouseLeave={() => setShowDeleteButton(false)}
      style={{
        backgroundColor: "rgb(0,0,0,0)",
        // alignSelf: "center",
        // marginTop: -25,
        marginLeft: marginLeft,
        // verticalAlign: "middle",
        justifySelf: "center",
        position: "relative",
        background: "#ffffff",
        width: size,
        height: size,
        borderRadius: square ? "0%" : "50%",
        display: "flex",
        overflow: "hidden",
        padding: -1,
        outline: 0,
        transition: "all 0.5s ease",
        backgroundImage: `url(${imageLink ? imageLink : " "})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      {children}
    </Box>
  );
}

export default ImageCircle;
