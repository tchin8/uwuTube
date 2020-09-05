import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { createVideo } from '../../actions/video_actions';

import VideoForm from './video_form';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  formType: 'Upload Video'
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createVideo: formData => dispatch(createVideo(formData)),
})

export default connect(mSTP, mDTP)(VideoForm);