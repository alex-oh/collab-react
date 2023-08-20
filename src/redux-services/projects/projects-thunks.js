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
    async () => {
        const projects = await service.findProjects();
        return projects;
    }
);

export const findMyProjectsThunk = createAsyncThunk(
    "projects/findMyProjects",
    async (currentUser) => {
        const projects = await service.findMyProjects(currentUser);
        return projects;
    }
)

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