import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/addContact", (name, number) => {
  return {
    payload: {
      name,
      number,
    },
  };
});

const deleteContact = createAction("contact/deleteContact");

// const deleteContact = (contactId) => ({
//   type: DELETE_CONTACT,
//   payload: {
//     contactId,
//   },
// });

const setFilter = createAction("contacts/setFilter");

// const setFilter = (filter) => ({
//   type: SET_FILTER,
//   payload: {
//     filter,
//   },
// });

const actions = { addContact, deleteContact, setFilter };

export default actions;
