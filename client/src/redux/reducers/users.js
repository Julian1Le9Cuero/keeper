import {
  LOAD_USER,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  user: null,
  loading: true,
  error: null,
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
      };
    case LOAD_USER:
      return {
        ...state,
        user: payload,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default users;
