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
      vidName: null,
      vidUrl: null,
      validFile: null,
    }

    this.validateFileType = this.validateFileType.bind(this);
  }

  handleUploadVideoClick() {
    $("#file").click();
  }

  validateFileType(e) {
    const file = e.currentTarget.files[0];
    const fileName = file.name.split('.')[0];
    const fileType = file.type;

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    const mimeTypes = [
      'video/x-msvideo',
      'video/mpeg',
      'video/ogg',
      'video/mp2t',
      'video/webm',
      'video/3gpp',
      'video/3gpp2',
      'video/quicktime',
    ]

    if (mimeTypes.includes(fileType)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ 
          vid: file,
          vidName: fileName, 
          vidUrl: reader.result,
          validFile: true,
        });
      }

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      // keep this here, just in case it's not included in mimeTypes
      console.log(fileType); 
      //
      this.setState({ validFile: false });
    }
  }

  render() {
    const { closeModal } = this.props;

    const wrongFileType = this.state.validFile === false ? 
      <div className='file-error'>
        <FontAwesomeIcon icon="exclamation-triangle" className="exclamation-triangle" />
        <span>Invalid file format.</span>
      </div> : null

    let uploadVideoPage;

    if (!this.state.vid) {
      uploadVideoPage = (
        <div className="p1">
          <div className="header">
            <span>Upload videos</span>
            <div className="icons">
              <div>
                <FontAwesomeIcon icon="comment-alt" className="comment-alt" />
                <FontAwesomeIcon icon="exclamation" className="exclamation" />
              </div>
              <FontAwesomeIcon icon="times" className="times" onClick={() => closeModal()} />
            </div>
          </div>

          <div className="main">
            <div className="upload-circle" onClick={this.handleUploadVideoClick}>
              <FontAwesomeIcon icon="upload" className="upload" />
            </div>
            <div className='text'>
              <span>Choose a video file to upload</span>
              <span>Your videos will be private until you publish them.</span>
            </div>

            {wrongFileType}

            <button onClick={this.handleUploadVideoClick}>SELECT FILE</button>
            <input type="file"
              id="file"
              onChange={this.validateFileType} />
          </div>

          <div className="footer">
            <p>By submitting your videos to uwuTube, you acknowledge that you agree to uwuTube's <span>Terms of Service</span> and <span>Community Guidelines</span>.</p>
            <p>Please be sure not to violate others' copyright or privacy rights.</p>
          </div>
        </div>
      )
    } else {
      uploadVideoPage = (
        <div className="p2">
          <div className="header">
            <span>{this.state.vidName}</span>
            <div className="icons">
              <div>
                <FontAwesomeIcon icon="comment-alt" className="comment-alt" />
                <FontAwesomeIcon icon="exclamation" className="exclamation" />
              </div>
              <FontAwesomeIcon icon="times" className="times" onClick={() => closeModal()} />
            </div>
          </div>

          <div className="main">
            
          </div>

          <div className="footer">
            <div className="left">
              <span>HD</span>
              <span>Finished processing</span>
            </div>
            <button>SAVE</button>
          </div>
        </div>
      )
    }

    return (
      <div className="upload-video-form">
        {/* {uploadVideoPage} */}
        <div className="p2">
          <div className="header">
            <span></span>
            <div className="icons">
              <div>
                <FontAwesomeIcon icon="comment-alt" className="comment-alt" />
                <FontAwesomeIcon icon="exclamation" className="exclamation" />
              </div>
              <FontAwesomeIcon icon="times" className="times" onClick={() => closeModal()} />
            </div>
          </div>

          <div className="main">

          </div>

          <div className="footer">
            <div className="left">
              <span>HD</span>
              <span>Finished processing</span>
            </div>
            <button>SAVE</button>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoForm;