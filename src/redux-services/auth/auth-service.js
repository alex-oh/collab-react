// users-service -> users-controller in node server
import axios from "axios";

// set up http request urls
// const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const SERVER_API_URL = "http://localhost:4000/api";
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({ withCredentials: true });

// authentication actions
export const register = async (credentials) => {
    const response = await api.post(`${USERS_URL}/register`, credentials);
    return response.data;
};
export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};
export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};