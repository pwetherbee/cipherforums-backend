import Container from "@material-ui/core/Container";
import MiniThread from "./MiniThread";
import { Grid } from "@material-ui/core";
import { Comment } from "./Comment";
export const CommentContainer = ({ comments, secret, onDelete }) => {
  return (
    <Grid>
      {/* Comments by this user
      <MiniThread comments={comments} secret={secret} /> */}
      {comments?.map((comment) => (
        <Comment comment={comment} secret={secret} />
      ))}
    </Grid>
  );
};
