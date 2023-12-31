import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

// auth thunks
export const registerThunk = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        const response = authService.register(credentials);
        console.log(response);
        return response;
    }
);
export const loginThunk = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        const loggedInUser = await authService.login(credentials);
        return loggedInUser;
    }
);
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
    const response = await authService.logout();
    console.log(response);
    return response;
});

export const profileThunk = createAsyncThunk("auth/profile", async () => {
    const user = await authService.profile();
    return user;
});

export const updateUserThunk = createAsyncThunk(
    "users/updateUser",
    async (user) => {
        await authService.updateUser(user);
        return user;
    }
);