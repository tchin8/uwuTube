import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
});

// redirect logged in user to newsfeed
const Auth = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

// redirected to login/signup page unless logged in
const Protected = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
