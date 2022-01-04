import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

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
    img:{
      paddingTop: 80,
      height: "90vh",
    },
    footer: {
        display:"flex",
        justifyContent:"left",
      },
    address: {
        justifyContent:"left",
        // padding: 0,
        // paddingLeft: 20,
        minHeight: 1,
    }
  }));

export default function Public() {
    const classes = useStyles();
    return <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
                    <img className={classes.img} src="https://i.imgur.com/3kf7MYf.jpeg" />
            </Paper>
            <Toolbar className={classes.footer}>
                <Typography variant="h3">Title</Typography>
            </Toolbar>
            <Toolbar className={classes.footer}>
                <Typography variant="comment">Description</Typography>
            </Toolbar>
            <Toolbar className={classes.address}>
                <Typography variant="comment">Creator: tz1erY7SqRTAM6UmdwzfmQ48VqB6675uUrHH</Typography>
            </Toolbar>
            </Grid>;
  }