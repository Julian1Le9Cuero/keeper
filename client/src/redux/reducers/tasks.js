import { GET_TASKS, REMOVE_TASK, TASK_ERROR } from "../actions/types";

const INITIAL_STATE = {
  userTasks: [],
  tasksLoading: true,
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
      };
    default:
      return state;
  }
};

export default tasks;
