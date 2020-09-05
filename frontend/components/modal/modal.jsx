import React from 'react';
import VideoFormContainer from './video_form_container';

function Modal({ currentUser, modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Upload Video':
      component = <VideoFormContainer
        currentUser={currentUser}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;