import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem, changeFilter } from "./contacts-actions";

const items = createReducer([], {
  [addItem]: (state, { payload }) => [...state, payload],
  [removeItem]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
