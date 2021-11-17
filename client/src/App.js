import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// Material UI components
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

// Pages
import User from "./pages/User";
import Post from "./pages/Post";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Public from "./pages/Public";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PubForum from "./pages/PubForum";
import CreatePublic from "./pages/CreatePublic";
import Confirm from "./components/Confirm";
import Verify from "./pages/Verify";

// Components
import MenuAppBar from "./components/MenuAppBar";

import "@fontsource/ibm-plex-mono";

// import ibmPlexMono from "./fonts/IBMPlexMono-Bold.ttf";
import { CssBaseline } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00e019",
      contrastText: "#121212",
    },
    secondary: {
      main: "#FFFF00",
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1c1c1c",
    },
    text: {
      primary: "#0aff00",
      secondary: "#00ff1b",
      disabled: "#00ff1b",
      hint: "#00ff1b",
    },
    other: {
      primary: "#FFFF00",
    },
    divider: "rgba(0,0,0,0.12)",
  },
  typography: {
    fontFamily: "IBM Plex Mono, Monospace",
  },
});

// const theme = createTheme({
//   palette: {
//     type: "light",
//     primary: {
//       main: "#455a64",
//     },
//     secondary: {
//       main: "#76ff03",
//     },
//     text: {
//       primary: "#303E46",
//       secondary: "#455a64",
//       disabled: "#00ff1b",
//       hint: "#00ff1b",
//     },
//     divider: "rgba(0,0,0,0.12)",
//   },
//   typography: {
//     fontFamily: "IBM Plex Mono, Monospace",
//   },
// });

export default function App() {
  console.log("this is the home page");
  const [loggedUser, setLoggedUser] = useState({ ok: 0, username: null });
  const [logEvent, setLogEvent] = useState(null);
  useEffect(async () => {
    const res = await fetch("/api/login/status/", {
      credentials: "include",
    });
    if (!res || res.status != 200) {
      console.log(res);
      console.log("error");
      return;
    }
    const data = await res.json();
    setLoggedUser(data);
    console.log(data);
  }, []);
  const handleLogin = (username) => {
    setLoggedUser({ ok: 1, username: username });
    setLogEvent(null);
  };
  const handleLogout = (username) => {
    // setLoggedIn = false;
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <MenuAppBar auth={loggedUser} />
        <Switch>
          <Route path="/user/:username">
            <User />
          </Route>
          <Route path="/post/:title">
            <Post />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/create/public/:topic">
            <CreatePublic />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/public/:topic/:postname">
            <Post />
          </Route>
          <Route path="/public/:topic">
            <PubForum auth={loggedUser} />
          </Route>
          <Route path="/public">
            <Public />
          </Route>
          <Route path="/Help">
            <Help />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Confirm">
            <Confirm />
          </Route>
          <Route path="/Verify">
            <Verify />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
