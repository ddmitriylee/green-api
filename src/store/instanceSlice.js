import { createSlice } from "@reduxjs/toolkit";

const AUTH_KEY = "auth";

const loadInitialState = () => {
  const nullState = { idInstance: null, apiTokenInstance: null, phone: null };
  try {
    const data = localStorage.getItem(AUTH_KEY);
    if (!data) {
      return nullState;
    }
    return JSON.parse(data);
  } catch (e) {
    console.log(`Failed finding initial state: ${e}`);
    return nullState;
  }
};

const initialState = loadInitialState();

const instanceSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set: (state, action) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
      state.phone = action.payload.phone;
      localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    },
    remove: (state) => {
      state.idInstance = null;
      state.apiTokenInstance = null;
      state.phone = null;
      localStorage.removeItem(AUTH_KEY);
    },
  },
});

export const { set, remove } = instanceSlice.actions;
export default instanceSlice.reducer;
