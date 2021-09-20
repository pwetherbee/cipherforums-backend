// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Link, Typography } from "@material-ui/core";
// import { Paper } from "@material-ui/core";
// export const FollowContainer = ({ following }) => {
//   console.log(following);
//   return (
//     <List>
//       {following.map((user, i) => (
//         <ListItem key={i}>
//           <Paper>
//             <Typography variant={"h6"}>
//               <Link href={`/user/${user.username}`}>{user.username}</Link>
//             </Typography>
//           </Paper>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function FollowContainer({ following }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {following.map((user, i) => (
        <div>
          <ListItem
            key={`${user}_${i}`}
            button
            component={RouteLink}
            to={`/user/${user.username}`}
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar alt={user.username} src={"/static/images/avatar/1.jpg"} />
            </ListItemAvatar>
            <ListItemText
              primary={user.username}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {user.bio}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
