// projects-service -> projects-controller in node server
import axios from "axios";

// set up http request urls
const SERVER_API_URL = process.env.REACT_APP_API_URL;
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
    console.log("from projects-service",pid);
    const response = await axios.get(`${PROJECTS_API}/${pid}`);
    return response.data;
};

export const findMyProjects = async (user) => {
    const response = await axios.get(
        `${SERVER_API_URL}/my-projects/${user._id}`
    );
    console.log(response.data);
    return response.data;
};

export const findCourseProjects = async (courseId) => {
    const response = await axios.get(
        `${SERVER_API_URL}/course-projects/${courseId}`
    );
    return response.data;
};

export const updateProject = async (project) => {
    const response = await axios.put(`${PROJECTS_API}/${project._id}`, project);
    // console.log(response);
    return project;
};
export const deleteProject = async (projId) => {
    const response = await axios.delete(`${PROJECTS_API}/${projId}`);
    return response.data;
};
