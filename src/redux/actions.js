import actionTypes from "./action-types";

const { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } = actionTypes;

const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: {
    contactId,
  },
});

const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});

const actions = { addContact, deleteContact, setFilter };

export default actions;
