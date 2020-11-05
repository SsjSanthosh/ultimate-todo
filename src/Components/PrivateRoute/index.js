import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ loggedIn, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};

export default connect(mapStateToProps)(PrivateRoute);
