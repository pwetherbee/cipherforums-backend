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
  const [createBtnDisabled, setCreateBtnDisabled] = useState([false]);
  const [avi, setAvi] = useState("");
  const [bio, setBio] = useState("");
  const onSubmit = async () => {
    console.log(avi, bio);
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
  const handleUploadFile = async (e) => {
    const media = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", media);
    console.log(media);
    setCreateBtnDisabled(true);
    const res = await fetch("https://api.imgur.com/3/image/", {
      method: "POST",
      headers: {
        Authorization: "Client-ID 4d15a14d3b5d53b",
      },
      body: formdata,
    });
    const data = await res.json();

    console.log(data);
    setAvi(data.data.link);
    setCreateBtnDisabled(false);
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
          <input
            accept="image/*"
            id="file"
            single
            type="file"
            onInput={handleUploadFile}
          />
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
