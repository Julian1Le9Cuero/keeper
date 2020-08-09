import axios from "axios";
import {
  GET_TASKS,
  GET_TASK,
  REMOVE_TASK,
  CLEAR_TASK,
  TASK_ERROR,
} from "./types";
import { generateConfig } from "../../utils/generateConfig";
import { createAlert } from "./alert";

// Get tasks by user
export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/users/tasks");
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response,
    });
  }
};

// Add new task
export const addTask = (taskData, history) => async (dispatch) => {
  try {
    const config = generateConfig();

    await axios.post("/api/users/tasks", taskData, config);

    history.push("/manage-tasks");
    dispatch(createAlert("Task added!", "success", 3000));
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response,
    });
    const message = error.response.data.message;
    message
      .split(",")
      .forEach((message) => dispatch(createAlert(message, "danger")));
  }
};

// Clear task after a task is updated
export const clearTask = () => (dispatch) => {
  dispatch({
    type: CLEAR_TASK,
  });
};

export const updateTask = (taskId, taskData, history) => async (dispatch) => {
  try {
    const config = generateConfig();

    await axios.put(`/api/tasks/${taskId}`, taskData, config);

    history.push("/manage-tasks");

    dispatch(createAlert("Task updated", "success", 3000));
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/${taskId}`);

    dispatch({
      type: REMOVE_TASK,
      payload: taskId,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response,
    });
  }
};

//  find task
export const findTask = (taskId, history) => (dispatch) => {
  try {
    dispatch({
      type: GET_TASK,
      payload: taskId,
    });

    history.push("/add-task");
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: `Invalid id ${taskId}`,
    });
  }
};
