// users-service -> users-controller in node server
import axios from "axios";

// set up http request urls
// const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const SERVER_API_URL = "http://localhost:4000/api";
const USERS_URL = `${SERVER_API_URL}/users`;

// const api = axios.create({ withCredentials: true }); // do we need this line?

// user profile actions
export const findProfile = async(userId) => {
    const response = await api.get(`${USERS_URL}/profile/${userId}`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

