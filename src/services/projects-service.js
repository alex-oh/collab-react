import axios from "axios";

// set up http request urls
const API_BASE = process.env.REACT_APP_API_BASE;
const PROJECTS_API = `${API_BASE}/projects`;

// service functions, CRUD operations
export const createProject = async (project) => {
    const response = await axios.post(PROJECTS_API, project);
    return response.data;
};

export const findProjects = async () => {
    // send http get request to tuits_api
    const response = await axios.get(PROJECTS_API);
    // extract json array from response from server
    return response.data;
};

export const updateProject = async (project) => {
    const response = await axios.put(`${PROJECTS_API}/${project._id}`, project);
    return project;
};
export const deleteProject = async (projId) => {
    const response = await axios.delete(`${PROJECTS_API}/${projId}`);
    return response.data;
};
