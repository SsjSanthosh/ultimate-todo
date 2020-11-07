import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import "antd/dist/antd.css";
import "utils/utils.scss";
import Dashboard from "Pages/Dashboard";
import PrivateRoute from "Components/PrivateRoute";
import { connect } from "react-redux";

import { useEffect } from "react";
import { getItemFromLocalStorage, getTokenFromLocalStorage } from "utils/utils";
import { loginUser } from "Redux/Auth/actions";
import TodoForm from "Pages/TodoForm";
import {
  LOCAL_STORAGE_TOKEN_NAME,
  LOCAL_STORAGE_TASKS_NAME,
} from "utils/constants";
import { setTasks } from "Redux/Data/actions";

function App({ loginUser, setTasks }) {
  useEffect(() => {
    let token = getItemFromLocalStorage(LOCAL_STORAGE_TOKEN_NAME);
    let tasks = getItemFromLocalStorage(LOCAL_STORAGE_TASKS_NAME);
    if (token) {
      loginUser(token);
    }
    if (tasks) {
      setTasks(tasks);
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
          <PrivateRoute
            exact
            path={["/new-task", "/edit-task/:id"]}
            component={TodoForm}
          ></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { loginUser, setTasks })(App);
