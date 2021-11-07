import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import actionTypes from "./action-types";
import shortid from "shortid";

const { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } = actionTypes;

const contactItemsReducer = (
  state = JSON.parse(localStorage.getItem("contacts")) || [],
  action
) => {
  switch (action.type) {
    case ADD_CONTACT:
      if (state.find((contact) => contact.name === action.payload.name)) {
        alert(`${action.payload.name} is alrteady in contacts.`);
        return state;
      }

      return [
        ...state,
        {
          id: shortid.generate(),
          name: action.payload.name,
          number: action.payload.number,
        },
      ];

    case DELETE_CONTACT:
      return state.reduce((acc, el) => {
        if (el.id !== action.payload.contactId) {
          acc.push(el);
        }
        return acc;
      }, []);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  rootReducer /*, getLocalStorage */,
  composeWithDevTools()
);

export default store;
