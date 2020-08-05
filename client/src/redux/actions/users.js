import axios from "axios";
import {
  LOAD_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  AUTH_ERROR,
} from "./types";
import { setAuthToken } from "../../utils/setAuthToken";

export const register = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/users/register", formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error.response,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  setAuthToken(localStorage.getItem("token"));

  try {
    const res = await axios.get("/api/users/me");

    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/users/login", formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response,
    });
  }
};
