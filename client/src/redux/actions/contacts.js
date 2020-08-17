import axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACT,
  REMOVE_CONTACT,
  CLEAR_CONTACT,
  CONTACT_ERROR,
  SEARCH_CONTACTS,
} from "./types";
import { generateConfig } from "../../utils/generateConfig";
import { createAlert } from "./alert";

// Get tasks by user
export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/users/contacts");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response,
    });
  }
};

// Add new contact
export const addContact = (contactData, history) => async (dispatch) => {
  try {
    const config = generateConfig();

    await axios.post("/api/users/contacts", contactData, config);

    history.push("/manage-contacts");
    dispatch(getContacts());
    dispatch(createAlert("New contact added!", "success", 3000));
  } catch (error) {
    const message = error.response.data.message;
    message
      .split(",")
      .forEach((message) => dispatch(createAlert(message, "danger")));
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response,
    });
  }
};

// Clear contact after a contact is updated
export const clearContact = () => (dispatch) => {
  dispatch({
    type: CLEAR_CONTACT,
  });
};

export const updateContact = (contactId, contactData, history) => async (
  dispatch
) => {
  try {
    const config = generateConfig();

    await axios.put(`/api/contacts/${contactId}`, contactData, config);

    history.push("/manage-contacts");

    dispatch(createAlert("Contact updated", "success", 3000));
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response,
    });
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${contactId}`);

    dispatch({
      type: REMOVE_CONTACT,
      payload: contactId,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response,
    });
  }
};

//  find contact
export const findContact = (contactId) => (dispatch) => {
  try {
    dispatch({
      type: GET_CONTACT,
      payload: contactId,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: `Invalid id ${contactId}`,
    });
  }
};

// Filter contacts by name or info
export const searchContacts = (search) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_CONTACTS,
      payload: search,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: `Invalid search ${search}`,
    });
  }
};
