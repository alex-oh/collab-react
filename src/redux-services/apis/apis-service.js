// apis-service -> apis-controller in node server
import axios from "axios";

// set up http request urls
// const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const SERVER_API_URL = "http://localhost:4000/api";
const APIS_API = `${SERVER_API_URL}/apis`;

// service functions, CRUD operations
export const createApi = async (api) => {
    const response = await axios.post(APIS_API, api);
    return response.data;
};
export const findApiById = async (aid) => {
    // send http get request to apis_api, passing in api ID
    const response = await axios.get(APIS_API, aid);
    // response.data is the api object returned from the server
    return response.data;
};
export const getApiByLink = async (apiToFind) => {
    // requests data from apis collection that has same url.
    // UNCOMMENT THE BELOW TWO LINES ONCE CONTROLLER FUNCTION WORKS
    // const response = await axios.get(`${SERVER_API_URL}/apiLink`, apiToFind);
    // returns api object from database (has _id)
    //return response.data;
    const sampleApi = {
        _id: "64e0359c6106817b924bcb07",
        title: "Updated Title",
        category: "Updated Category",
        link: "http://updatedlink.com",
        description:
            "An API that provides current weather data for any location in the world.",
        cors: "yes",
        auth: "apiKey",
        https: "true",
        userFavorites: ["60fa3b254f429b1f5e5e3f1c", "60fa3b254f429b1f5e5e3f1d"],
        __v: 0,
    };
    return sampleApi;
};
export const updateApi = async (api) => {
    const response = await axios.put(`${APIS_API}/${api._id}`, api);
    return api;
};
export const deleteApi = async (apiId) => {
    const response = await axios.delete(`${APIS_API}/${apiId}`);
    return response.data;
};
