import { createSlice } from "@reduxjs/toolkit";

// creating slice for privacy
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    onToggle: (state, action) => {
      return (state = !state);
    },
  },
});
export const privacyActions = privacySlice.actions;
export default privacySlice;
