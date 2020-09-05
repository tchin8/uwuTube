import React from 'react';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

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

  render() {
    return (
      <div className="upload-video-form">
      </div>
    )
  }
}
export default VideoForm;