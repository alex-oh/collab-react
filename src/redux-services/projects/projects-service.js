// projects-service -> projects-controller in node server
import axios from "axios";

// set up http request urls
// const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const SERVER_API_URL = "http://localhost:4000/api";
const PROJECTS_API = `${SERVER_API_URL}/projects`;

// service functions, CRUD operations
export const createProject = async (project) => {
    console.log(project);
    const response = await axios.post(PROJECTS_API, project);
    return response.data;
};

export const findProjects = async () => {
    // send http get request to projects_api
    const response = await axios.get(PROJECTS_API);
    // extract json array from response from server
    return response.data;
};

export const findProjectById = async (pid) => {
    const response = await axios.get(`${PROJECTS_API}/${pid}`);
    return response.data;
}

export const updateProject = async (project) => {
    const response = await axios.put(`${PROJECTS_API}/${project._id}`, project);
    return project;
};
export const deleteProject = async (projId) => {
    const response = await axios.delete(`${PROJECTS_API}/${projId}`);
    return response.data;
};
