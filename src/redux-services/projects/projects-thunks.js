import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./projects-service";


export const createProjectThunk = createAsyncThunk(
    "projects/createProject",
    async (project) => {
        const newProject = await service.createProject(project);
        return newProject;
    }
);

export const findProjectsThunk = createAsyncThunk(
    "projects/findProjects",
    async () => await service.findProjects()
);

export const updateProjectThunk = createAsyncThunk(
    "projects/updateProject",
    async (project) => await service.updateProject(project)
);

export const deleteProjectThunk = createAsyncThunk(
    "projects/deleteProject",
    async (projId) => {
        await service.deleteProject(projId);
        return projId;
    }
);