import { createSlice } from "@reduxjs/toolkit";
import {
  updateUserDescriptionThunk,
  updateUserEmailThunk,
  updateUserPasswordThunk,
} from "./user-thunks";

const initialState = {
    currentUser: {
        description: "",
        email: "",
        password: "",
      },
    };

const editButtonSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [updateUserDescriptionThunk.fulfilled]: (state, { payload }) => {
        state.currentUser.description = payload.description;
    },
    [updateUserEmailThunk.fulfilled]: (state, { payload }) => {
        state.currentUser.email = payload.email;
    },
    [updateUserPasswordThunk.fulfilled]: (state, { payload }) => {
        state.currentUser.password = payload.password;
    },
  },
});

export const { updateUserDescription, updateUserEmail, updateUserPassword } = editButtonSlice.actions;

export default editButtonSlice.reducer;
