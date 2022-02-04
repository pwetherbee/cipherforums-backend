class CommentTree {
  constructor(comments) {
    this.tree = [];
    this.depth = 0;
    this.size = 0;
    this.cache = {};
    this.build(comments);
  }
  build(comments) {
    comments.forEach((comment, i) => {
      this.insert(comment, i);
    });
  }
  insert(comment, i) {
    if (!comment.parentID) {
      this.tree.push({ comment: comment, replies: [] });
      this.cache[comment.commentID] = [i];
    } else {
    }
  }
}

export default CommentTree;
