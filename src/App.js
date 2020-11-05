import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import "antd/dist/antd.css";
import "utils/utils.scss";
import Dashboard from "Pages/Dashboard";
import PrivateRoute from "Components/PrivateRoute";
import { connect } from "react-redux";

import { useEffect } from "react";
import { getTokenFromLocalStorage } from "utils/utils";
import { loginUser } from "Redux/Auth/actions";
function App({ loginUser }) {
  useEffect(() => {
    let token = getTokenFromLocalStorage();
    if (token) {
      loginUser(token);
    }
  }, [loginUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
          ></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { loginUser })(App);
