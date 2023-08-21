import { createSlice } from "@reduxjs/toolkit";
import {
    createProjectThunk,
    findProjectsThunk,
    updateProjectThunk,
    deleteProjectThunk,
    findMyProjectsThunk,
} from "./projects-thunks";

import { logoutThunk } from "../auth/auth-thunks";

const initialState = {
    myProjects: [],
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    extraReducers: {
        // fill this in
        [findMyProjectsThunk.fulfilled]: (state, { payload }) => {
            state.myProjects = payload;
        },
        [logoutThunk.fulfilled]: (state, action) => {
            // clears the project
            state.myProjects = [];
        }
    },
    reducers: {},
});

// export const { createTuit, deleteTuit } = projectsSlice.actions;
export default projectsSlice.reducer;