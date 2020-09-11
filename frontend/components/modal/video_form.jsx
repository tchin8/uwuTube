import React from 'react';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import {Player, ControlBar } from 'video-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class VideoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.currentUser.id,
      title: "",
      description: "",
      vid: null,
      vidUrl: null,
      validFile: null,
      mimeType: null,
      fileName: null,
    }

    this.validateFileType = this.validateFileType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          title: fileName,
          vidUrl: reader.result,
          validFile: true,
          mimeType: fileType,
          fileName: file.name,
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

  update(field) {
    return (e) => (
      this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();

    const formData = new FormData();

    formData.append('video[user_id]', this.state.user_id);
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[vid]', this.state.vid);

    this.props.createVideo(formData);

    // this redirect isn't working, maybe set state, then redirect? 
      // .then(video => <Redirect to={`/videos/${video.id}`} />);
  }

  render() {
    console.log(this.state);
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
            <span>{this.state.title}</span>
            <div className="icons">
              <div>
                <FontAwesomeIcon icon="comment-alt" className="comment-alt" />
                <FontAwesomeIcon icon="exclamation" className="exclamation" />
              </div>
              <FontAwesomeIcon icon="times" className="times" onClick={() => closeModal()} />
            </div>
          </div>

          <div className="main">
            <div className="left">
              <span className="sub-header">Details</span>
              <div className="info">
                <textarea value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Add a title that describes your video">
                </textarea>
                <span className="type">Title (required)</span>
                <span className="chars-left">{this.state.title.length}/100</span>
              </div>
              <div className="info">
                <textarea value={this.state.description}
                  onChange={this.update('description')}
                  placeholder="Tell viewers about your video"
                  className="description">
                </textarea>
                <span className="type">Description (required)</span>
                <span className="chars-left">{this.state.description.length}/5000</span>
              </div>
              <div className='guidelines'>
                <span className="sub-header">Before you publish, check the following:</span>
                <div>
                  <span>Do kids appear in this video?</span>
                  <span>Make sure you follow our policies to protect minors from harm, exploitation, bullying, and violations of labor law.</span>
                </div>
                <div>
                  <span>Looking for overall content guidance?</span>
                  <span>Our Community Guidelines can help you avoid trouble and ensure that uwuTube remains a safe and vibrant community.</span>
                </div>
              </div>
            </div>
            <div className="right">
              <video className='preview' controls>
                <source src={this.state.vidUrl} type={this.state.mimeType} />
                Your browser does not support HTML5 video.
              </video>
              <span>{this.state.fileName}</span>
            </div>
          </div>

          <div className="footer">
            <div className="left">
              <span>HD</span>
              <span>Finished processing</span>
            </div>
            <button onClick={this.handleSubmit}
              disabled={!this.state.title.length || !this.state.description.length}>SAVE</button>
          </div>
        </div>
      )
    }

    return (
      <div className="upload-video-form">
        {uploadVideoPage}
      </div>
    )
  }
}
export default VideoForm;