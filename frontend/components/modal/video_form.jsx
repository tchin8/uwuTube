import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class VideoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.currentUser.id,
      title: "",
      description: "",
      vid: null,
      vidUrl: null
    }
  }

  handleUploadVideo() {
    $("#file").click();
  }

  render() {
    let { closeModal } = this.props;

    return (
      <div className="upload-video-form">
        <div className="header">
          <span>Upload videos</span>
          <div className="icons">
            <div>
              <FontAwesomeIcon icon="comment-alt" className="comment-alt" />
              <FontAwesomeIcon icon="exclamation" className="exclamation" />
            </div>
            <FontAwesomeIcon icon="times" className="times" onClick={() => closeModal()}/>
          </div>
        </div>

        <div className="main">
          <div className="upload-circle" onClick={this.handleUploadVideo}>
            <FontAwesomeIcon icon="upload" className="upload"/>
          </div>
          <div className='text'>
            <span>Choose a video file to upload</span>
            <span>Your videos will be private until you publish them.</span>
          </div>

          <button onClick={this.handleUploadVideo}>SELECT FILE</button>
          <input type="file"
            id="file"/>
        </div>

        <div className="footer">
          <p>By submitting your videos to uwuTube, you acknowledge that you agree to uwuTube's <span>Terms of Service</span> and <span>Community Guidelines</span>.</p>
          <p>Please be sure not to violate others' copyright or privacy rights.</p>
        </div>
      </div>
    )
  }
}
export default VideoForm;