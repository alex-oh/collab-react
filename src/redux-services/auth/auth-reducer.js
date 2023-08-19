// this reducer updates the state of currentUser.
// reducer gets its return values in payload from auth-thunks
import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    updateUserThunk
} from "./auth-thunks";

const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [profileThunk.rejected]: (state, action) => {
            state.currentUser = null;
        },
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        }
    },
});
export default authSlice.reducer;
