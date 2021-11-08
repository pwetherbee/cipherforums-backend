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
import { useState } from "react";
import Switch from "@material-ui/core/Switch";

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
  const [avi, setAvi] = useState("");
  const [bio, setBio] = useState("");
  const onSubmit = async () => {
    const res = await fetch("/user/settings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bio: bio,
        avi: avi,
      }),
    });
    const data = await res.json();
    alert(data.message);
  };
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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            multiline
          />
        </FormControl>
        <div>
          <br></br>
        </div>
        <Typography variant="body2" gutterBottom>
          Upload a profile
        </Typography>
        <FormControl fullWidth>
          <div>
            <br></br>
          </div>
          <input type="file" id="file"></input>
        </FormControl>
        <FormControl fullWidth>
          <Typography
            variant="body2"
            gutterBottom
            className={classes.settingsItem}
          >
            Darkmode
          </Typography>
          <Switch defaultChecked color="primary" />
        </FormControl>
        <Button
          className={classes.settingsItem}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          onClick={onSubmit}
        >
          Save
        </Button>
      </Container>
    </CssBaseline>
  );
}
