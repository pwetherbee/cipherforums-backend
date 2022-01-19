import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Container,
  Button,
  Icon,
  Input,
  TextField,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";
import LaptopChromebookSharpIcon from "@material-ui/icons/LaptopChromebookSharp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HubIcon from "@material-ui/icons/DeviceHub";
import homeLogo from "../logo.svg";
import { encrypt, decrypt } from "../helpers/convert.js";
import "../snowflakes.css";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";
import MultilineEncryptDemo from "../components/MultilineEncryptDemo";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    padding: 50,
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh",
    wordBreak: "break-word",
    color: theme.palette.text.secondary,
  },
  div: {
    padding: theme.spacing(2),
    maxWidth: "100%",
    // paddingTop: 100,
    // paddingBottom: 100,
    textAlign: "center",
    boxShadow: "none",
    color: theme.palette.text.secondary,
    // borderTopWidth: 3,
    // borderColor: theme.palette.text.secondary,
    // borderStyle: "solid",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const title = "cipherforums.com";
  const subtitle = "A cryptographically secure forum";
  const encrypted1 = "congrats on your first cipher message!";
  const [char, setChar] = useState("a");
  const [userKey, setUserKey] = useState("");
  const [toggle, setToggle] = useState(true);
  const [cipherTexts, setCipherTexts] = useState({
    title: {
      xor: encrypt(title, "xor", "xor"),
      aes: encrypt(title, "xor", "aes"),
    },
    subtitle: {
      xor: encrypt(subtitle, "xor", "xor"),
      aes: encrypt(subtitle, "xor", "aes"),
    },
    encrypted1: {
      xor: encrypt(encrypted1, "xor", "xor"),
      aes: encrypt(encrypted1, "xor", "aes"),
    },
  });
  const [secret, setSecret] = useState("xor");
  const randomSecrets = () => {
    setSecret("xor");
    setTimeout(() => {
      const interval = setInterval(() => setSecret(Math.random() * 100), 10);
      setTimeout(() => {
        clearInterval(interval);
        randomSecrets();
      }, 1000);
    }, 3000);
  };
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  useEffect(() => {
    document.title = "Cipherforums";
    setInterval(() => {
      setChar(characters.charAt(Math.random() * 62));
    }, 20);
    // randomly generate secret keys
    //5b351c7f7d64542873542c1a4e744f5c604a2e1365687f655a3b5d470155684b7b5b24007869557246302c43687819540845585310050b464c59171754090944
    randomSecrets();
  }, []);

  return (
    <div className={classes.root}>
      {/* <img
        style={{
          height: 100,
          width: 100,
          position: "absolute",
          marginTop: 15,
          top: 0,
        }}
        src={homeLogo}
      /> */}
      {Array(200)
        .fill()
        .map(() => (
          <div class="snowflake triangle">{char}</div>
        ))}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12}>
          <Container>
            <Typography variant="h2" align="center">
              {decrypt(cipherTexts.title.aes, userKey || secret, "aes").slice(
                0,
                16
              ) || "_" * 16}
            </Typography>

            <Typography variant="subtitle1" align="center">
              {decrypt(
                cipherTexts.subtitle.aes,
                userKey || secret,
                "aes"
              ).slice(0, 40) || "_____" * 50}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} align="center">
          {/* <MultilineEncryptDemo /> */}
          {/* <Button variant="outlined">Interactive Demo</Button> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              // variant="filled"
              value={userKey}
              size="small"
              onChange={(e) => setUserKey(e.target.value)}
              label="Enter a key here"
              helperText="Type 'xor' to decrypt"
            />
            <ArrowForward
              // style={{ marginTop: "8px", marginLeft: "10px" }}
              fontSize="medium"
            />
            <Typography
              display="inline"
              variant="h6"
              style={{ lineHeight: "-10px" }}
            >
              {userKey.padEnd(3, "_")}
            </Typography>
            <ArrowForward
              // style={{ marginTop: "8px", marginLeft: "10px" }}
              fontSize="medium"
            />
            <LockOpenOutlinedIcon
              // style={{ marginTop: "8px", marginLeft: "10px" }}
              fontSize="medium"
            />
            <Typography
              display="inline"
              variant="h6"
              style={{ lineHeight: "-10px" }}
            >
              {decrypt(cipherTexts.encrypted1.xor, userKey, "xor").slice(
                0,
                encrypted1.length
              ) || "_____" * 50}
            </Typography>
          </div>
        </Grid>

        <Container maxWidth="lg">
          <br />
          <br />
          <br />

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} align="center">
              <Link to="/public" component={RouteLink}>
                <div className={classes.div}>
                  <LaptopChromebookSharpIcon style={{ fontSize: "15vw" }} />
                  <Typography>Visit the public forums</Typography>
                </div>
              </Link>
            </Grid>

            <Grid item xs={12} sm={4} align="center">
              <Link to="/signup" component={RouteLink}>
                <div className={classes.div}>
                  <ExitToAppIcon style={{ fontSize: "15vw" }} />
                  <Typography>Signup</Typography>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Link to="/NftExplore" component={RouteLink}>
                <div className={classes.div}>
                  <HubIcon style={{ fontSize: "15vw" }} />
                  <Typography>Blockchain Tokens</Typography>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
