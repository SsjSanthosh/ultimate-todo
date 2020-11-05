import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import "antd/dist/antd.css";
import "utils/utils.scss";
import Dashboard from "Pages/Dashboard";
import PrivateRoute from "Components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
