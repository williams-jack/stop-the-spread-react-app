import axios from "axios";
import { backendURL } from "../serviceConstants";

// Add an entry
export const addEntry = (sessionID, req) => {
    axios.post("/user/locationHistory/addEntry", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Edit an entry
export const editEntry = (sessionID, req) => {
    axios.post("/user/locationHistory/editEntry", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Delete an entry
export const deleteEntry = (sessionID, req) => {
    axios.get("/user/locationHistory/deleteEntry", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Get entries
export const getEntry = (sessionID) => {
    axios.get("/user/locationHistory/entries", {
        baseURL: backendURL,
        withCredentials: true,
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

