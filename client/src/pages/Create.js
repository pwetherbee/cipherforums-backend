import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    // backgroundColor: "red",
  },
}));

export default function Public() {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: "",
    subtitle: "",
    image: "",
    key: "",
    withKey: true,
    encryptTitle: false,
    storeKey: true,
    allowOtherStoreKey: true,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // make fetch request
    const res = await fetch("/api/create/forum", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        subtitle: values.subtitle,
        img: values.image,
        key: values.key,
      }),
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create forum post
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant="comment">
                * Titles and subtitles will not be encrypted *
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Title"
                placeholder=""
                multiline
                variant="outlined"
                onChange={handleChange("title")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Subtitle"
                placeholder=""
                multiline
                variant="outlined"
                onChange={handleChange("subtitle")}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                className={classes.input}
                id="file"
                single
                type="file"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                fullWidth
                id="outlined-textarea"
                label="Key"
                placeholder=""
                multiline
                variant="outlined"
                onChange={handleChange("key")}
              /> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="key" color="primary" checked="checked" />
                  }
                  label="Generate forum with a key"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="key" color="primary" checked="checked" />
                  }
                  label="Encrypt title and subtitle with your key"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="key" color="primary" checked="checked" />
                  }
                  label="Store key in your keychain"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="key" color="primary" checked="checked" />
                  }
                  label="Allow key to be stored in other users keychain"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Create
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
