import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    marginTop: 30,
  },
  settingsItem: {
    marginTop: 30,
    wordBreak: "break-all",
  },
}));
export default function Public() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Container maxWidth="sm" className={classes.settingsContainer}>
        <Typography variant="body2" gutterBottom>
          Enter a bio
        </Typography>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="bio"
            variant="outlined"
            className={classes.settingsItem}
            multiline
          />
        </FormControl>
        <Typography
          variant="body2"
          gutterBottom
          className={classes.settingsItem}
        >
          Enter a profile image link
        </Typography>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            className={classes.settingsItem}
          />
        </FormControl>
        <Button
          className={classes.settingsItem}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Container>
    </CssBaseline>
  );
}
