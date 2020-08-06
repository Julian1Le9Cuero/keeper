import { combineReducers } from "redux";
import users from "./users";
import alert from "./alert";
import tasks from "./tasks";

export default combineReducers({ users, alert, tasks });
