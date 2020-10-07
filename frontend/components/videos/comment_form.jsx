import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    let currUser = props.currentUser ? props.currentUser.id : undefined;
    this.state = {
      user_id: currUser,
      video_id: parseInt(props.video.id),
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    console.log('click')
    e.preventDefault();
    this.props.createComment(this.state).then(() => this.setState({ body: '' }));
  }

  handleFocus(e) {
    if (!this.props.currentUser) {
      this.props.history.push('/login');
    } else {
      e.preventDefault();
      $("div.btns").addClass("show");
    }
  }

  handleCancel(e) {
    e.preventDefault();
    $("div.btns").removeClass("show");
  }

  render() {
    const { currentUser } = this.props;

    const defaultThumb = window.default_thumb;
    let commentThumbnail = !currentUser ? (
      <img src={defaultThumb} className="default-thumb" />
    ) : (
      <span>{currentUser.fname[0].toUpperCase()}</span>
    );

    return (
      <form className="comment">
        <div className="user-circle">{commentThumbnail}</div>
        <div>
          <textarea
            value={this.state.body}
            placeholder="Add a public comment"
            onChange={this.update("body")}
            onFocus={this.handleFocus}
          ></textarea>
          <div className="btns">
            <span className="cxl" onClick={this.handleCancel}>
              CANCEL
            </span>
            <button
              className="comment"
              onClick={this.handleSubmit}
              disabled={this.state.body.length === 0}
            >
              COMMENT
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default CommentForm;