import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersService from "./users-service";

// auth thunks
export const registerThunk = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        const response = usersService.register(credentials);
        console.log(response);
        return response;
    }
);
export const loginThunk = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        const loggedInUser = await usersService.login(credentials);
        return loggedInUser;
    }
);
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
    const response = await usersService.logout();
    return response;
});

// user profile thunks
export const profileThunk = createAsyncThunk("auth/profile", async () => {
    const user = await usersService.profile();
    return user;
});
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
