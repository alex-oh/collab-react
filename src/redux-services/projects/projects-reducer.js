import { createSlice } from "@reduxjs/toolkit";
import {
    createProjectThunk,
    findProjectsThunk,
    updateProjectThunk,
    deleteProjectThunk,
    findMyProjectsThunk,
} from "./projects-thunks";

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
        }
    },
    reducers: {},
});

// export const { createTuit, deleteTuit } = projectsSlice.actions;
export default projectsSlice.reducer;