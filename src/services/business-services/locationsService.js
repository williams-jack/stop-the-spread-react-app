import axios from "axios";
import { backendURL } from "../serviceConstants";

// Add a loction
export const addLocation = (sessionID, req) => {
    axios.post("/business/locations/addLocation", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Edit a location
export const editLocation = (sessionID, req) => {
    axios.post("/business/locations/editLocation", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Delete a location
export const deleteLocation = (sessionID, req) => {
    axios.delete("/business/locations/deleteLocation", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Get locations
export const getLocations = (sessionID) => {
    axios.get("/business/locations/getLocations", {
        baseURL: backendURL,
        withCredentials: true,
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

