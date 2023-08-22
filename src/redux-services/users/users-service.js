// users-service -> users-controller in node server
import axios from "axios";

// set up http request urls
const SERVER_API_URL = process.env.REACT_APP_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

// user profile actions
export const findUser = async(userId) => {
    const response = await axios.get(`${USERS_URL}/${userId}`);
    return response.data;
};

export const findManyUsersById = async (userIds) => {
    const response = await axios.get(`${USERS_URL}/multiple`, userIds)
    return response.data;
};

export const updateUserDescription = async (username, description) => {
    const response = await axios.put(`${USERS_URL}/${username}/description`, {description});
    return response.data;
};

export const updateUserEmail = async (username, email) => {
    const response = await axios.put(`${USERS_URL}/${username}/updateEmail`, {email});
    return response.data;
};

export const updateUserPassword = async (username, password) => {
    const response = await axios.put(`${USERS_URL}/${username}/updatePassword`, {password});
    return response.data;
};

export const addFavoriteApiToUser = async (userId, apiId) => {
    const response = await axios.put(`${USERS_URL}/${userId}/favorite`, { apiId });
    return response.data;
};


