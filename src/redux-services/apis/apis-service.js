// apis-service -> apis-controller in node server
import axios from "axios";

// set up http request urls
const SERVER_API_URL = process.env.REACT_APP_API_URL;
const APIS_API = `${SERVER_API_URL}/apis`;

// service functions, CRUD operations
export const createApi = async (api) => {
    const response = await axios.post(APIS_API, api);
    return response.data;
};

export const findApiById = async (aid) => {
    const url = `${APIS_API}/${aid}`;
    const response = await axios.get(url);
    return response.data;
};



export const getApiByName = async (apiToFind) => {
    const response = await axios.get(`http://localhost:4000/api/apis/name/${apiToFind}`);
    return response.data;  // Return the actual data
};



export const updateApi = async (api) => {
    const response = await axios.put(`${APIS_API}/${api._id}`, api);
    return api;
};

export const deleteApi = async (apiId) => {
    const response = await axios.delete(`${APIS_API}/${apiId}`);
    return response.data;
};

export const addUserToApiFavorites = async (apiId, userId) => {
    try {
        const response = await axios.put(`http://localhost:4000/api/apis/favorites/${apiId}/`, { userId: userId });
        
        
        return response.data;
    } catch (error) {
        console.error("Error adding user to API favorites:", error);
        throw error;
    }
}

