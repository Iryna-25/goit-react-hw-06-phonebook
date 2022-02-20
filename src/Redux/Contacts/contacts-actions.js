import { createAction, nanoid } from "@reduxjs/toolkit";

const formContact = (contact) => ({
  payload: { ...contact, id: nanoid() },
});

export const addItem = createAction("items/add", formContact);
export const removeItem = createAction("items/remove");
export const changeFilter = createAction("filter/change");
