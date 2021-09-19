import axios from "axios";
import { backendURL } from "../serviceConstants";

// Add an entry
export const addEntry = async (jsonPackage) => {
    return axios.post(
        `${backendURL}/user/locationHistory/addEntry`,
        jsonPackage,
        {
            withCredentials: true,
        }
    );
};

// Edit an entry
export const editEntry = async (jsonPackage) => {
    return axios.post(
        `${backendURL}/user/locationHistory/editEntry`,
        jsonPackage,
        {
            withCredentials: true,
        }
    );
};

// Delete an entry
export const deleteEntry = async (jsonPackage) => {
    return axios.delete(
        `${backendURL}/user/locationHistory/deleteEntry`,
        jsonPackage,
        {
            withCredentials: true,
        }
    );
};

// Get entries
export const getEntry = async () => {
    return axios.get(`${backendURL}/user/locationHistory/entries`, {
        withCredentials: true,
    });
};

export { addEntry, getEntry };
