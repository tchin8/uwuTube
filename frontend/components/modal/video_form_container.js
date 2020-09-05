import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';

const mSTP = state => ({
  formType: 'Upload Video'
});

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(VideoForm);