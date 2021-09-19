import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "30rem",
//     display: "flex",
//     "& > * + *": {
//       margin: "auto",
//     },
//   },
// }));

export default function LoadingIcon({ height }) {
  // const classes = useStyles();

  return (
    <Grid
      container
      style={{ height: height }}
      justifyContent="center"
      alignContent="center"
    >
      <CircularProgress />
    </Grid>
  );
}
