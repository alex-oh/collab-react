import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersService from "./users-service";

// user profile thunks
export const findProfileThunk = createAsyncThunk("users/findProfile", async (userId) => {
    const user = await usersService.findProfile(userId);
    return user;
});
export const updateUserThunk = createAsyncThunk(
    "users/updateUser",
    async (user) => {
        await usersService.updateUser(user);
        return user;
    }
);
