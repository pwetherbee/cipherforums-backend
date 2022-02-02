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
import { useHistory } from "react-router";
import Grid from "@mui/material/Grid";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@material-ui/core";

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
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};
export default function FollowContainer({ following }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid>
      {following.map((user, i) => (
        <Grid item key={`${user}_${i}`}>
          <RouteLink to={`/@${user.username}`} style={linkStyle}>
            <Link>
              <Typography>{user.username}</Typography>
            </Link>
          </RouteLink>
        </Grid>

        // <div key={`${user}_${i}`}>
        //   <Typography
        //     component={RouteLink}
        //     to={`/@${user.username}`}
        //   ></Typography>

        //   <ListItem
        //     // onClick={(e) => {
        //     //   e.preventDefault();
        //     //   history.push(`/user/${user.username}`);
        //     //   updateuser();
        //     // }}

        //     button
        //     component={RouteLink}
        //     to={`/@${user.username}`}
        //     alignItems="flex-start"
        //   >
        //     <ListItemAvatar>
        //       <Avatar alt={user.username} src={"/static/images/avatar/1.jpg"} />
        //     </ListItemAvatar>
        //     <ListItemText
        //       primary={user.username}
        //       secondary={
        //         <React.Fragment>
        //           <Typography
        //             component="span"
        //             variant="body2"
        //             className={classes.inline}
        //             color="textPrimary"
        //           >
        //             {user.bio}
        //           </Typography>
        //         </React.Fragment>
        //       }
        //     />
        //   </ListItem>
        //   <Divider variant="inset" component="li" />
        // </div>
      ))}
    </Grid>
  );
}
