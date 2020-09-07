export const fetchVideo = videoId => (
  $.ajax({
    url: `/api/videos/${videoId}`
  })
);

export const createVideo = formData => (
  $.ajax({
    url: `/api/videos`,
    method: 'post',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateVideo = video => (
  $.ajax({
    url: `/api/videos/${video.id}`,
    method: 'patch',
    data: { video }
  })
);

export const deleteVideo = videoId => (
  $.ajax({
    url: `/api/videos/${videoId}`,
    method: 'delete'
  })
);

// // index ? KEEP FOR NOW
// export const fetchUserVideos = userId => (
//   $.ajax({
//     url: `/api/users/${userId}/videos`
//   })
// );