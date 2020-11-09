import React from "react";
import Layout from "Components/Layout";
import { Redirect, Route } from "react-router-dom";
import { getItemFromLocalStorage } from "utils/utils";
import { LOCAL_STORAGE_TOKEN_NAME } from "utils/constants";

// This component checks if the user has logged in (check token), if they have, it sends them to the dashboard/user pages.
// If not, redirects them to the login page.
// Note - storing tokens in localStorage is because there's no backend here, ideally that would take care of auth and tasks restoration.

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
