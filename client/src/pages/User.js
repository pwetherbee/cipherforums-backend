import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CommentContainer } from "../components/CommentContainer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import MenuAppBar from "../components/MenuAppBar";
import Bio from "../components/Bio";
import UserPosts from "../components/UserPosts";
import SecretBox from "../components/SecretBox";
import LoadingIcon from "../components/LoadingPageIcon";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import FollowContainer from "../components/FollowContainer";
import ConfirmDelete from "../components/ConfirmDelete";
import LikedNFTs from "../components/LikedNFTs";
// import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index } = props;
  return <div hidden={value !== index}>{children}</div>;
}

export default function Profile() {
  let match = useRouteMatch();
  let { username } = useParams();
  // const classes = useStyles();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [deletePostData, setDeletePostData] = useState({});

  const [createdPosts, setCreatedPosts] = useState([]);
  const [userData, setUserData] = useState();
  const [secret, setSecret] = useState({});
  const [comments, setComments] = useState([]);
  const [following, setFollowing] = useState([]);
  const [obj, setObj] = useState({});
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);
  const [newUser, setNewUser] = useState(null);

  useEffect(async () => {
    setTab(0);
    setUserData(null);
    fetch(`/api/user/${username}/info`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCreatedPosts(result.createdPosts);
        setUserData(result);
      });
    fetch(`/api/${username}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // TODO: Rename postTime to time and CommentText to text
        setComments(result.comments);
      })
      .catch((err) => console.log("Error: Could not fetch comments"));

    fetch(`/api/user/${username}/following/list/${username}`) // TODO: Fix this mess in api
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setFollowing(result.following);
        setObj(result);
      });
  }, [username]);

  const updateSecret = function (secret) {
    console.log(secret);
    // username = "b";
    console.log(username);
    setSecret(secret);
  };

  const handleChangeTab = (e, newTab) => {
    setTab(newTab);
  };

  const handleChangeTab2 = (e, newTab) => {
    setTab2(newTab);
  };

  const handleDecision = (decision) => async () => {
    if (decision === "agree") {
      console.log(deletePostData);
      // make fetch to delete
      const res = await fetch("/api/delete/post", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deletePostData),
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.message);
      }
    }
    setOpenConfirmDelete(false);
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleClickDelete = (data) => {
    setOpenConfirmDelete(true);
    setDeletePostData(data);
    // console.log(data);
  };
  // const updateuser = () => {
  //   console.log("update user called");
  //   setUserData();
  //   setNewUser(1);
  // };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <MenuAppBar auth={userData?.loggedIn} /> */}

      <Switch>
        {/* <Route path={`${match.path}/post/:postname`}>
          <Post />
        </Route> */}

        {/* <Route exact path={`${match.path}/`}>
         
        </Route> */}

        <Grid container maxWidth="xl">
          <ConfirmDelete
            open={openConfirmDelete}
            handleDecision={handleDecision}
            handleClose={handleCloseConfirmDelete}
          />
          <Grid
            container
            spacing={0}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={9}>
              <Bio
                profile={userData}
                canFollow={userData?.loggedIn && !userData?.isFollowing}
              />
            </Grid>
            <div>
              <Grid item xs={12}>
                {userData?.loggedIn && userData?.currUser ? (
                  <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      href="/create"
                    >
                      Create Forum
                    </Button>
                  </div>
                ) : (
                  ""
                )}

                {/* <div style={{ paddingTop: 30 }}>
                  <SecretBox updateSecret={updateSecret} />
                </div> */}
              </Grid>
            </div>
            <Grid item xs={12}>
              <Tabs
                value={tab}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Created Posts"></Tab>
                <Tab label="User Comments"></Tab>
                <Tab label="Following"></Tab>
                <Tab label="NFT"></Tab>
              </Tabs>
            </Grid>
            {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              saxasx
            </Grid>
            <Grid item xs={12} sm={6}>
              saxasx
            </Grid>
            </Grid> */}
            <TabPanel value={tab} index={0}>
              {userData ? (
                createdPosts.length ? (
                  <UserPosts
                    secret={secret}
                    posts={createdPosts}
                    onDelete={handleClickDelete}
                  />
                ) : (
                  "user hasn't made any posts yet"
                )
              ) : (
                <LoadingIcon height={"30rem"} />
              )}
            </TabPanel>
            {/* </Grid> */}
            {/* -------------------------------------- */}
            {/* --------------------------------------- */}
            <TabPanel value={tab} index={1}>
              {comments.length ? (
                <CommentContainer comments={comments} secret={secret} />
              ) : (
                "This user hasn't made any comments yet"
              )}
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <Container>
                {following.length ? (
                  <FollowContainer
                    following={following}
                    secret={secret}
                    // updateUser={updateuser}
                  />
                ) : (
                  "This user isn't following anyone"
                )}
              </Container>
            </TabPanel>
            <TabPanel value={tab} index={3}>
              <Tabs
                value={tab2}
                onChange={handleChangeTab2}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Liked NFTs"></Tab>
                <Tab label="ETH"></Tab>
                <Tab label="TZ"></Tab>
              </Tabs>
              <TabPanel value={tab2} index={0}>
                <LikedNFTs />
              </TabPanel>
              <TabPanel value={tab2} index={1}>
                <TabPanel value={tab} index={3}>
                  <Tabs
                    value={tab2}
                    onChange={handleChangeTab2}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab label="Liked"></Tab>
                    <Tab label="Created"></Tab>
                    <Tab label="Collected"></Tab>
                  </Tabs>
                </TabPanel>
              </TabPanel>
              <TabPanel value={tab2} index={2}>
                <TabPanel value={tab} index={3}>
                  <Tabs
                    value={tab2}
                    onChange={handleChangeTab2}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab label="Liked"></Tab>
                    <Tab label="Created"></Tab>
                    <Tab label="Collected"></Tab>
                  </Tabs>
                </TabPanel>
              </TabPanel>
            </TabPanel>

            {/* <UserPosts secret={secret} posts={createdPosts} /> */}
          </Grid>

          {/* </Grid> */}
        </Grid>
      </Switch>
    </React.Fragment>
  );
}
