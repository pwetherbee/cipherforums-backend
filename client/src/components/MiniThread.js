// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { FixedSizeList } from "react-window";
// import { CipherText } from "./CipherText";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     height: "auto",
//     maxheight: 200,
//     maxWidth: 300,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function renderRow(props) {
//   const { index, style, comments } = props;
//   return comments.map((comment) => {
//     <ListItem button style={style} key={index}>
//       <ListItemText primary={comment} />
//     </ListItem>;
//   });
//   // return (
//   //   <ListItem button style={style} key={index}>
//   //     <ListItemText primary={`Item ${index + 1}`} />
//   //   </ListItem>
//   // );
// }

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
//   comments: PropTypes.array.isRequired,
// };

// export default function MiniThread({ comments }) {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
//         {comments.map((comment, i) => {
//           <ListItem button key={i}>
//             <ListItemText primary={comment} />
//           </ListItem>;
//         })}
//       </FixedSizeList> */}
//       {comments.map((comment, i) => {
//         return (
//           <ListItem button key={i}>
//             <ListItemText primary={CipherText(comment.text, "default_key")} />
//           </ListItem>
//         );
//       })}
//       {/* {comments.map((comment, i) => {
//         return (
//           <div button key={i}>
//             {comment.text}
//           </div>
//         );
//       })} */}
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { CipherText } from "./CipherText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    // maxHeight: 500,
    overflow: "hidden",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  ListItemText: {
    multiline: true,
  },
}));

export default function MiniThread({ comments, secret }) {
  const classes = useStyles();
  return (
    <List dense={true} className={classes.root} subheader={<li />}>
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`Comments`}</ListSubheader>
            {comments.map((comment, i) => (
              <div
                key={`${i}-${sectionId}-${comment.author || comment.username}`}
              >
                <ListItem
                  key={`item-${sectionId}-${
                    comment.author || comment.username
                  }`}
                >
                  <ListItemText
                    primary={`${comment.author || ""}`}
                    secondary={`${CipherText(
                      comment.text || comment.commentText,
                      secret || "default_key"
                    )}`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
