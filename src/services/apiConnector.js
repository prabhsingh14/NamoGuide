import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData, headers, params) => {
    try {
        const response = await axiosInstance({
            method,
            url,
            data: bodyData || null,
            headers: headers || null,
            params: params || null,
        });
        return response;
    } catch (error) {
        console.error(`API Error: ${error.message}`);
        throw error;
    }
};