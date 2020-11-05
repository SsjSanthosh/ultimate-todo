import { message } from "antd";
import React from "react";
import Layout from "Components/Layout";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

// This component checks if the user has logged in, if they have, it sends them to the dashboard/user pages.
// If not, redirects them to the login page.
function PrivateRoute({ loggedIn, component: Component, ...rest }) {
  //   if (!loggedIn) {
  //     message.error("You must be logged in to access this page.");
  //   }
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};

export default connect(mapStateToProps)(PrivateRoute);
