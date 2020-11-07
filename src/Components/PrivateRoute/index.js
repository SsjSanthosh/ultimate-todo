import { message } from "antd";
import React from "react";
import Layout from "Components/Layout";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getItemFromLocalStorage, getTokenFromLocalStorage } from "utils/utils";
import { LOCAL_STORAGE_TOKEN_NAME } from "utils/constants";

// This component checks if the user has logged in (check token), if they have, it sends them to the dashboard/user pages.
// If not, redirects them to the login page.
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return getItemFromLocalStorage(LOCAL_STORAGE_TOKEN_NAME) ? (
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

export default PrivateRoute;
