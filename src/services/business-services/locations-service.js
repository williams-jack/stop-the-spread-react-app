// import React from "react";
import axios from "axios";
import { backendURL } from "../service-constants";

// Add a loction
export const addLocation = (sessionID, req) => {
    axios.get("/business/locations/addLocation", {
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
    axios.get("/business/locations/editLocation", {
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
    axios.get("/business/locations/deleteLocation", {
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

