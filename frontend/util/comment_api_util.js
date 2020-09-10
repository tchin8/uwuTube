export const fetchComments = videoId => (
  $.ajax({
    url: `/api/videos/${videoId}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    url: `/api/videos/${comment.video_id}/comments`,
    method: 'post',
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'patch',
    data: { comment }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    url: `/api/posts/${commentId}`,
    method: 'delete'
  })
);
