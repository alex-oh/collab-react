import { createSlice } from "@reduxjs/toolkit";
import {
    createProjectThunk,
    findProjectsThunk,
    updateProjectThunk,
    deleteProjectThunk
} from "../services/projects-thunks";

const initialState = {
    projects: [],
    loading: false,
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    extraReducers: {
        // fill this in
    },
    reducers: {},
});

// export const { createTuit, deleteTuit } = projectsSlice.actions;
export default projectsSlice.reducer;