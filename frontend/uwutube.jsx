import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

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
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});
