import {
  GET_CONTACTS,
  REMOVE_CONTACT,
  CONTACT_ERROR,
  GET_CONTACT,
  CLEAR_CONTACT,
  SEARCH_CONTACTS,
} from "../actions/types";

const INITIAL_STATE = {
  userContacts: [],
  contactsLoading: true,
  contact: null,
  error: null,
  count: 0,
};

const contacts = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        userContacts: payload.contacts,
        contactsLoading: false,
      };
    case SEARCH_CONTACTS:
      return {
        ...state,
        userContacts: state.userContacts.filter(
          ({ name, email }) =>
            name.toLowerCase().includes(payload.toLowerCase()) ||
            email.toLowerCase().includes(payload.toLowerCase())
        ),
        contactsLoading: false,
        count: state.userContacts.length === 0 ? -1 : 0,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: state.userContacts.find(
          (contact) => contact._id.toString() === payload
        ),
        contactsLoading: false,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        contact: null,
        contactsLoading: false,
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        userContacts: state.userContacts.filter(
          (contact) => contact._id.toString() !== payload
        ),
        contactsLoading: false,
      };

    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
        contactsLoading: false,
      };
    default:
      return state;
  }
};

export default contacts;
