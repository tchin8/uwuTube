import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUserCircle,
  faSearch,
  faBars,
  faExclamationCircle,
  faHome,
  faLayerGroup,
  faPlayCircle,
  faHistory,
  faVideo,
  faPlus,
  faTimes,
  faCommentAlt,
  faExclamation,
  faUpload,
  faExclamationTriangle,
  faFire,
  faThumbsUp,
  faClock,
  faCloudUploadAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  fab,
  faUserCircle,
  faSearch,
  faBars,
  faExclamationCircle,
  faHome,
  faLayerGroup,
  faPlayCircle,
  faHistory,
  faVideo,
  faPlus,
  faTimes,
  faCommentAlt,
  faExclamation,
  faUpload,
  faExclamationTriangle,
  faFire,
  faThumbsUp,
  faClock,
  faCloudUploadAlt,
  faBell,
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = {};
  if (window.currentUser) {

    preloadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
  }
  const store = configureStore(preloadedState);

  // // TESTING START
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});
