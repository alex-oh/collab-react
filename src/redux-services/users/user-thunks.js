import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";

export const updateUserDescriptionThunk = createAsyncThunk(
  "users/updateDescription",
  async ({ username, description }) => {
    return await authService.updateUserDescription(username, description);
  }
);

export const updateUserEmailThunk = createAsyncThunk(
  "users/updateEmail",
  async ({ username, email }) => {
    return await authService.updateUserEmail(username, email);
  }
);

export const updateUserPasswordThunk = createAsyncThunk(
  "users/updatePassword",
  async ({ username, password }) => {
    return await authService.updateUserPassword(username, password);
  }
);
