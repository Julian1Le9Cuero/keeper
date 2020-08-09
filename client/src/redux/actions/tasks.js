import axios from "axios";
import {
  GET_TASKS,
  GET_TASK,
  REMOVE_TASK,
  CLEAR_TASK,
  TASK_ERROR,
} from "./types";
import { generateConfig } from "../../utils/generateConfig";

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
      payload: res.data,
    });
  }
};

// Add new task
export const addTask = (taskData) => async (dispatch) => {
  try {
    const config = generateConfig();
    await axios.post("/api/users/tasks", taskData, config);

    dispatch({
      type: GET_TASKS,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: res.data,
    });
  }
};

export const updateTask = (taskId, taskData) => async (dispatch) => {
  try {
    const config = generateConfig();

    await axios.put(`/api/tasks/${taskId}`, taskData, config);

    dispatch({
      type: GET_TASKS,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: res.data,
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
      payload: res.data,
    });
  }
};

//  find task
export const findTask = (taskId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TASK,
      payload: taskId,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: res.data,
    });
  }
};

//Clear task
export const clearTask = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_TASK,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: res.data,
    });
  }
};
