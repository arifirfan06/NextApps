import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload.item);
    },
    removeList: (state, action) => {
      state.list.splice(state.list.indexOf(action.payload.item), 1);
    },
    addUser: (state, action) => {
      state.id = action.payload.id;
    },
    firstList: (state, action) => {
      state.list = action.payload.item;
    },
    resetList: (state) => {
      state.list = [];
      state.id = null;
    },
  },
});
export const resetList = authSlice.actions.resetList;
export const firstList = authSlice.actions.firstList;
export const addUser = authSlice.actions.addUser;
export const addList = authSlice.actions.addList;
export const removeList = authSlice.actions.removeList;
export default authSlice.reducer;
