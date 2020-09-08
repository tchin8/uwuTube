import * as APIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

export const receiveVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
});

export const fetchVideos = () => dispatch => (
  APIUtil.fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideo = videoId => dispatch => (
  APIUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
);

export const createVideo = formData => dispatch => (
  APIUtil.createVideo(formData)
    .then(video => dispatch(receiveVideo(video)))
);

export const updateVideo = video => dispatch => (
  ApiUtil.updateVideo(video)
    .then(video => dispatch(receiveVideo(video)))
);

export const deleteVideo = videoId => dispatch => (
  APIUtil.deleteVideo(videoId)
    .then(() => dispatch(removeVideo(videoId)))
);