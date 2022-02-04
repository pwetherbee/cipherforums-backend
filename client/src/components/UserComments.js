import Container from "@material-ui/core/Container";
import MiniThread from "./MiniThread";
import { Grid } from "@material-ui/core";
import { Comment } from "./Comment";
import { useEffect, useState } from "react";

export const UserComments = ({ secret, userID, username }) => {
  //   console.log(userID);
  const [comments, setComments] = useState([]);
  useEffect(async () => {
    const res = await fetch(`/api/user/${userID}/comments`);
    const data = await res.json();
    if (data.success) setComments(data.data);
  }, [userID]);

  return (
    <Container>
      {/* Comments by this user
      <MiniThread comments={comments} secret={secret} /> */}
      {comments?.map((comment, i) => (
        <Comment
          key={i}
          comment={comment}
          secret={secret}
          handleDeleteComment={() => {}}
          disabled
        />
      ))}
    </Container>
  );
};
