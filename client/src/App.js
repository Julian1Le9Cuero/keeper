import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";

// Components
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/TaskForm/TaskForm";
import ManageTasks from "./components/ManageTasks/ManageTasks";
import ManageContacts from "./components/ManageContacts/ManageContacts";

// Redux
import store from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/users";

// Set token if exists at local storage
setAuthToken(localStorage.getItem("token"));

const App = () => {
  // Load user once the app mounts
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/tasks" component={Tasks} />
          <PrivateRoute exact path="/add-task" component={TaskForm} />
          <PrivateRoute exact path="/manage-tasks" component={ManageTasks} />
          <PrivateRoute
            exact
            path="/manage-contacts"
            component={ManageContacts}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
