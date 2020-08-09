import {
  GET_TASKS,
  REMOVE_TASK,
  TASK_ERROR,
  GET_TASK,
  CLEAR_TASK,
} from "../actions/types";

const INITIAL_STATE = {
  userTasks: [],
  tasksLoading: true,
  task: null,
  error: null,
};

const tasks = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        userTasks: payload,
        tasksLoading: false,
      };
    case GET_TASK:
      return {
        ...state,
        task: state.userTasks.filter((task) => task._id.toString() !== payload),
        tasksLoading: false,
      };
    case CLEAR_TASK:
      return {
        ...state,
        task: null,
        tasksLoading: false,
      };
    case REMOVE_TASK:
      return {
        ...state,
        userTasks: state.userTasks.filter(
          (task) => task._id.toString() !== payload
        ),
        tasksLoading: false,
      };

    case TASK_ERROR:
      return {
        ...state,
        error: payload,
        tasksLoading: false,
        userTasks: [],
      };
    default:
      return state;
  }
};

export default tasks;
