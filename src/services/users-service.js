// users-service -> users-controller in node server
import axios from "axios";

// set up http request urls
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
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

// user profile actions
export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};
export const findProfile = async(userId) => {
    const response = await api.get(`${USERS_URL}/profile/${userId}`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};
