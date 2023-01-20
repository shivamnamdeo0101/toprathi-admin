import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import UserSlice from "./UserSlice";
import SchFilterSlice from "./SchFilterSlice";
const rootReducer = combineReducers({
  userAuth: UserSlice,
  sch:SchFilterSlice
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // persist only the requied part

  whitelist: ["userAuth","sch"],
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
