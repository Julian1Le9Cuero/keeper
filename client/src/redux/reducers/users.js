import {
  LOAD_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  AUTH_ERROR,
  LOGOUT,
} from "../actions/types";

const initialState = {
  user: null,
  loading: true,
  error: null,
  isAuthenticated: false,
};

const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        error: payload,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default users;
