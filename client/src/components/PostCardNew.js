import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link as RouteLink } from "react-router-dom";
import { Box, Link } from "@material-ui/core";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCardNew({ data, secret, onDelete, view, isOwner }) {
  const handleDelete = function (e) {
    onDelete(data);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("userpost", data);
  return (
    <Box>
      <Card
        sx={{
          maxWidth: view == "list" ? 800 : null,
          border: `1px solid`,
          borderColor: "primary.main3",
        }}
      >
        <RouteLink
          style={{ textDecoration: "none" }}
          to={`/${
            data.postType == "public"
              ? `public/${data.publicTopic}`
              : "@" + data.username
          }/${data.url}`}
        >
          <Link>
            <a>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
                    {data.username.slice(0, 1)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={data.url.slice(0, -5)}
                subheader={new Date(data.creationDate).toLocaleDateString(
                  undefined,
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              />
              {data.image ? (
                <CardMedia
                  component="img"
                  height={view == "list" ? 500 : 300}
                  image={data.image || "https://i.imgur.com/Ck4MLYV.jpg"}
                  alt={data.title}
                />
              ) : (
                <CardContent sx={{ height: view == "list" ? null : 300 }}>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              )}
            </a>
          </Link>
        </RouteLink>

        {/* {data.image ? (
          <CardMedia
            component="img"
            height={view == "list" ? 500 : 300}
            image={data.image || "https://i.imgur.com/Ck4MLYV.jpg"}
            alt={data.title}
          />
        ) : (
          <CardContent sx={{ height: view == "list" ? null : 300 }}>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        )} */}

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="primary" />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon color="primary" />
          </IconButton>
          {isOwner && (
            <IconButton
              onClick={handleDelete}
              color="primary"
              aria-label="share"
            >
              <DeleteForeverRoundedIcon />
            </IconButton>
          )}
          <Typography variant="caption">{data.numComments} comments</Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
