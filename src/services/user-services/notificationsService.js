import axios from "axios";
import { backendURL } from "../serviceConstants";

// Delete a notification
export const deleteNotification = (sessionID, req) => {
    axios.delete("/user/notifications/deleteNotifications", {
        baseURL: backendURL,
        withCredentials: true,
        data: req
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

// Get notification
export const getNotifications = (sessionID) => {
    axios.get("/user/notifications/getNotifications", {
        baseURL: backendURL,
        withCredentials: true,
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
};

