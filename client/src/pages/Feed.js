import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  item: {
    padding: 10,
  },
  nft: {
    padding: 10,
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image="https://i.imgur.com/Pd7Tk2D.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                @User
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Here is the title of a user post to feed
              </Typography>
            </CardContent>
            <CardActions>
              <FavoriteIcon />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 400 }}>
            <Typography
              className={classes.nft}
              style={{ textAlign: "center" }}
              variant="caption"
              color="text.secondary"
            >
              NFT Title
            </Typography>
            <Card sx={{ maxWidth: 200, margin: "auto" }}>
              <CardMedia
                className={classes.item}
                component="img"
                alt="Not found"
                height="200"
                image="https://i.imgur.com/KQGaGlg.jpeg"
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                @User
              </Typography>
              <Typography variant="caption" color="text.secondary">
                This is a comment left on an nft
              </Typography>
            </CardContent>
            <CardActions>
              <FavoriteIcon />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 225 }}>
            <Typography
              className={classes.nft}
              style={{ textAlign: "center" }}
              variant="caption"
              color="text.secondary"
            >
              NFT Title
            </Typography>
            <CardMedia
              className={classes.nft}
              component="img"
              alt="Not found"
              height="225"
              image="https://i.imgur.com/msu8S2y.png"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                @User *what purchase looks like*
              </Typography>
            </CardContent>
            <FavoriteIcon />
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 450 }}>
            <Typography gutterBottom variant="body2" component="div">
              @UserA
            </Typography>
            <Typography variant="caption" color="text.secondary">
              He is something to react to
            </Typography>
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                @UserB
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Here is a response to the above message
              </Typography>
            </CardContent>
            <CardActions>
              <FavoriteIcon />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 400 }}>
            <Typography
              className={classes.nft}
              style={{ textAlign: "center" }}
              variant="caption"
              color="text.secondary"
            >
              "Post Title"
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              @UserA
            </Typography>
            <Card sx={{ maxWidth: 200, margin: "auto" }}>
              <CardMedia
                className={classes.item}
                component="img"
                alt="Not found"
                height="200"
                image="https://i.imgur.com/trZxMHq.jpeg"
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                @User
              </Typography>
              <Typography variant="caption" color="text.secondary">
                This is a comment left on a post with an image
              </Typography>
            </CardContent>
            <CardActions>
              <FavoriteIcon />
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 450 }}>
            <Typography variant="body2" color="text.secondary">
              "Here is the title of a user post with no image"
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              @UserA
            </Typography>
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                @UserB
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Here is a comment on the post, may be encrypted
              </Typography>
            </CardContent>
            <CardActions>
              <FavoriteIcon />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
