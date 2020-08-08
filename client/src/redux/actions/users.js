import axios from "axios";
import {
  LOAD_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  AUTH_ERROR,
  LOGOUT,
} from "./types";
import { setAuthToken } from "../../utils/setAuthToken";
import { createAlert } from "./alert";

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
    const message = error.response.data.message;
    message
      .split(",")
      .forEach((message) => dispatch(createAlert(message, "danger")));

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
    const message = error.response.data.message;
    message
      .split(",")
      .forEach((message) => dispatch(createAlert(message, "danger")));

    dispatch({
      type: LOGIN_ERROR,
      payload: error.response,
    });
  }
};

export const googleLogin = () => async (dispatch) => {
  try {
    console.log("googleLogin");
    const res = await axios.get("/api/users/auth/google");
    console.log(res.data);
    // dispatch({
    //   type: LOGIN_SUCCESS,
    // });
  } catch (error) {
    console.log(error);
    dispatch(
      createAlert("Google auth error, try again later.", "danger", 4000)
    );
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};

export const logout = () => async (dispatch) => {
  setAuthToken("");

  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};
