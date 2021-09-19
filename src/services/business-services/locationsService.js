import axios from "axios";
import { backendURL } from "../serviceConstants";

// Add a loction
export const addLocation = async (jsonPackage) => {
    return axios.post(`${backendURL}/business/locations/addLocation`, jsonPackage, {
        withCredentials: true,
    });
};

// Edit a location
export const editLocation = async (jsonPackage) => {
    return axios.post(`${backendURL}/business/locations/editLocation`, jsonPackage, {
        withCredentials: true,
    });
};

// Delete a location
export const deleteLocation = async (jsonPackage) => {
    return axios.delete(`${backendURL}/business/locations/deleteLocation`, jsonPackage, {
        withCredentials: true,
    });
};

// Get locations
export const getLocations = async () => {
    return axios.get(`${backendURL}/business/locations/getLocations`, {
        withCredentials: true,
    });
};
