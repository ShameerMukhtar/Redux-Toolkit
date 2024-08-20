import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creating Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },
    add: (state, action) => {
      console.log(state, action);
    },
    subtract: (state, action) => {
      console.log(state, action);
    },
  },
});

//create store

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default counterStore;
