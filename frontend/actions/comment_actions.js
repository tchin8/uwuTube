import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = (postId) => dispatch => (
  CommentApiUtil.fetchComments(postId)
    .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = (comment) => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = (comment) => dispatch => (
  CommentApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
  CommentApiUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)))
);
