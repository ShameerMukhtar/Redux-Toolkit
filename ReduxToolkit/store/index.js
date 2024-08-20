import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import privacySlice from "./privacySlice";
//create store

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
