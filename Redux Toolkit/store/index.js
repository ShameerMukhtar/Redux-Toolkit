import { createStore } from "redux";
// Initial store value
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
//reducer function
const counterReducer = (store = INITIAL_VALUE, action) => {
  const newStore = store;
  if (action.type === "INCREMENT") {
    // console.log("INCREMENT HAPPENED");
    return { ...newStore, counter: newStore.counter + 1 };
  } else if (action.type === "DECREMENT" && newStore.counter > 0) {
    return { ...newStore, counter: newStore.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...newStore, counter: newStore.counter + Number(action.payload) };
  } else if (action.type === "SUBSTRACT") {
    return { ...newStore, counter: newStore.counter - action.payload };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...newStore, privacy: !newStore.privacy };
  }

  return newStore;
};

//create store

const counterStore = createStore(counterReducer);

export default counterStore;
