import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import UserSlice from "./UserSlice";
const rootReducer = combineReducers({
  userAuth: UserSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // persist only the requied part
  whitelist: ["userAuth"],
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
