import React, { useState } from "react";
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
import Container from "@material-ui/core/Container";
import { useParams } from "react-router";

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
}));

export default function Public() {
  const classes = useStyles();
  const { topic } = useParams();
  const [values, setValues] = useState({
    title: "",
    subtitle: "",
    image: "",
  });
  const handleChange = (props) => (e) => {
    setValues({ ...values, [props]: e.target.value });
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // submit request to web server
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Post to {topic}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Title"
                placeholder=""
                multiline
                variant="outlined"
                value={values.title}
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
                value={values.subtitle}
                onChange={handleChange("subtitle")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Image"
                placeholder=""
                variant="outlined"
                value={values.image}
                onChange={handleChange("image")}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
