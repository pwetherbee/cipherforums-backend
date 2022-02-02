import React from "react";
import { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Breadcrumb from "./Breadcrum";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PublicIcon from "@material-ui/icons/Public";
import HelpIcon from "@material-ui/icons/Help";
import Icon from "@material-ui/core/Icon";
import { SvgIcon } from "@material-ui/core";
import homeLogo from "../logo.svg";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";
import {
  syncWallet,
  desyncWallet,
  getActiveAccount,
} from "../helpers/wallet.js";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 1,
    border: "none",
    backgroundColor: theme.palette.primary.contrastText,
    // backgroundColor: "#000000",
    // borderStyle: "solid",
    // borderRadius: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
  },
  logo: {
    width: 50,
    marginTop: 0,
  },
  menu: {
    marginTop: 60,
  },
}));

const Search = styled("div")(({ theme }) => ({
  color: "#00e019",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#121212", 0.15),
  "&:hover": {
    backgroundColor: alpha("#151515", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#00e019",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function MenuAppBar({ auth }) {
  const [mobile, setMobile] = useState(false);
  const [wallet, setWallet] = useState({});
  useLayoutEffect(() => {
    function updateSize() {
      setMobile(window.innerWidth < 1000);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(async () => {
    const currAccount = await getActiveAccount();
    setWallet(currAccount || {});
  }, []);
  // const { innerWidth, innerHeight } = window;
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const preventDefault = (event) => event.preventDefault();
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSync = async () => {
    const permissions = await syncWallet();
    if (permissions) {
      setWallet(permissions);
    }
  };
  const handleUnsync = async () => {
    desyncWallet();
    setWallet({});
  };

  const btnStyle = "text";

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar className={classes.root}>
          {!mobile && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
          )}

          <Typography
            variant="subtitle1"
            className={classes.title}
            color="primary"
            component={RouteLink}
            to="/"
          >
            <img className={classes.logo} src={homeLogo} />
            {/* <Button></Button> */}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Button
              variant={btnStyle}
              color="primary"
              component={RouteLink}
              to="/public"
            >
              {mobile || "Public Topics"}
              {mobile && <PublicIcon />}
            </Button>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Button
              variant={btnStyle}
              color="primary"
              component={RouteLink}
              to="/help"
            >
              {mobile || "Help"}
              {mobile && <HelpIcon />}
            </Button>
          </Typography>
          <Search className={classes.title}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {wallet.address ? (
            <Typography variant="h6" className={classes.title}>
              <Button
                variant={btnStyle}
                color="primary"
                component={RouteLink}
                to={`/tz/${wallet.address}`}
              >
                {mobile || wallet.address}
                {mobile && <HelpIcon />}
              </Button>
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.title}>
              <Button variant={btnStyle} color="primary" onClick={handleSync}>
                {mobile || "Sync"}
                {mobile && <HelpIcon />}
              </Button>
            </Typography>
          )}
          {wallet.address && (
            <Typography variant="h6" className={classes.title}>
              <Button variant={btnStyle} color="primary" onClick={handleUnsync}>
                {mobile || "Unsync"}
                {mobile && <HelpIcon />}
              </Button>
            </Typography>
          )}
          {auth.ok && !mobile && (
            <Typography color="primary" variant="h6">
              @{auth.username}
            </Typography>
          )}
          {Boolean(auth.ok) && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <AccountCircle color="primary" />
              </IconButton>

              <Menu
                id="menu-appbar"
                className={classes.menu}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  key={1}
                  component={RouteLink}
                  to={`/@${auth.username}`}
                  style={{ textAlign: "center" }}
                >
                  Profile
                </MenuItem>
                <Divider />
                <MenuItem key={2} component={RouteLink} to="/settings">
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem key={3} component={Link} href={"/logout"}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
          {Boolean(auth.ok) || (
            <Typography variant="h6" className={classes.title}>
              <Button
                variant={btnStyle}
                color="primary"
                component={RouteLink}
                to="/login"
              >
                {mobile || "Login / Signup"}
                {mobile && <SupervisedUserCircleIcon color="primary" />}
              </Button>
            </Typography>
          )}
          {/* <Typography variant="h6" className={classes.title}>
            <Breadcrumb
              locations={["Cipherforums", "Users", "Posts", "MyPost"]}
            />
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
