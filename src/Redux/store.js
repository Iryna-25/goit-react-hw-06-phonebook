import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./Contacts/contacts-reducer";

const contactsPersistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};
let middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
