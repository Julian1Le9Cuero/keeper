import { SEND_ALERT, REMOVE_ALERT } from "../actions/types";
import { v4 as uuidv4 } from "uuid";

export const createAlert = (message, type, timeout = 5000) => (dispatch) => {
  const id = uuidv4();

  dispatch({
    type: SEND_ALERT,
    payload: {
      id,
      type,
      message,
    },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};
