import axios from "axios";

axios.interceptors.request.use((config) => {
    return config;
});

axios.interceptors.response.use((response) => {
    // ! TODO: Change it for successful Authentication
    // throw response.data;

    // * Change the response according to the response from server.
    return response.data;
});

export const request = async ({ url, method, params, data }) => {
    const res = await axios.request({
        url,
        method,
        params,
        data,
    });

    return res;
};
