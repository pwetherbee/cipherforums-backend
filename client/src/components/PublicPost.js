import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    // color: "#ffffff",
  },

  title: {
    marginLeft: 20,
  },
  details: {
    display: "inline-flex",
    flexDirection: "row",
    // padding: 20,
  },
  content: {
    // flex: "1 0 auto",
    overflowWrap: "break-word",
    color: "#ffffff",
    padding: 14,
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  img: {
    maxHeight: 150,
    maxWidth: 180,
    minHeight: 50,
    padding: 0,
  },
  card__actions: {
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  create: {
    marginTop: 10,
    marginLeft: 10,
  },
}));
export const PublicPost = ({ details }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} key={details.id}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <img
            className={classes.img}
            alt="complex"
            src={details.image || "https://i.imgur.com/AD3MbBi.jpeg"}
          />
          <CardContent className={classes.content}>
            <Typography variant="caption">{details.username}</Typography>
            <Typography variant="body2">{details.url}</Typography>
            <div className={classes.card__actions}>
              <Typography className={classes.card__actions} variant="caption">
                {details.numComments} comments
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};
