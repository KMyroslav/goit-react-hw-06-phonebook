import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./actions";
import shortid from "shortid";

const contactItemsReducer = createReducer(
  JSON.parse(localStorage.getItem("contacts")) || [],
  {
    [actions.addContact]: (state, action) => {
      console.log(action);
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
    },

    [actions.deleteContact]: (state, action) => {
      return state.reduce((acc, el) => {
        if (el.id !== action.payload) {
          acc.push(el);
        }
        return acc;
      }, []);
    },
  }
);

const filterReducer = createReducer("", {
  [actions.setFilter]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
