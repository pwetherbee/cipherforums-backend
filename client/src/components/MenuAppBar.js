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
import CreateSharpIcon from "@material-ui/icons/CreateSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#121212",
    marginBottom: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar({ auth }) {
  const [mobile, setMobile] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      setMobile(window.innerWidth < 1000);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // const { innerWidth, innerHeight } = window;
  console.log("Window dimensions are:");
  console.log(mobile);
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

  const btnStyle = "outlined";

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

          <Typography variant="h6" className={classes.title}>
            <Button
              variant="contained"
              color="primary"
              component={RouteLink}
              to="/"
            >
              Home
            </Button>
            {/* <RouteLink to="/jskdfjsd">click me</RouteLink> */}
          </Typography>

          {mobile || (
            <Typography variant="h6" className={classes.title}>
              <Button
                variant={btnStyle}
                color="primary"
                component={RouteLink}
                to="/public"
              >
                Public Topics
              </Button>
            </Typography>
          )}
          {mobile || (
            <Typography variant="h6" className={classes.title}>
              <Button
                variant={btnStyle}
                color="primary"
                component={RouteLink}
                to="/help"
              >
                Help
              </Button>
            </Typography>
          )}

          {auth.ok && (
            <RouteLink
              to={`/user/${auth.username}`}
              style={{ textDecoration: "none" }}
            >
              <Link underline="hover">
                <Typography color="primary" variant="h6">
                  @{auth.username}
                </Typography>
              </Link>
            </RouteLink>
          )}

          {Boolean(auth.ok) && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle color="primary" />
              </IconButton>

              <Menu
                id="menu-appbar"
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
                <MenuItem key={1}>
                  <Button
                    variant={btnStyle}
                    color="primary"
                    component={RouteLink}
                    to={`/user/${auth.username}`}
                  >
                    Profile
                  </Button>
                </MenuItem>
                <MenuItem key={2}>
                  <Button
                    variant={btnStyle}
                    color="primary"
                    component={RouteLink}
                    to="/settings"
                  >
                    My account
                  </Button>
                </MenuItem>
                <MenuItem key={3}>
                  <Button
                    variant={btnStyle}
                    color="primary"
                    component={Link}
                    href={"/logout"}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          )}
          {Boolean(auth.ok) || (
            <Typography variant="h6" className={classes.title}>
              {mobile || (
                <Button
                  variant={btnStyle}
                  color="primary"
                  component={RouteLink}
                  to="/login"
                >
                  Login / Signup
                </Button>
              )}
              {mobile && <CreateSharpIcon color="primary" />}
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
