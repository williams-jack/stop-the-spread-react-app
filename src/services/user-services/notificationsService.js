import axios from "axios";
import { backendURL } from "../serviceConstants";

// Delete a notification
export const deleteNotification = async (jsonPackage) => {
    return axios.delete(`${backendURL}/user/notifications/deleteNotifications`, jsonPackage, {
        withCredentials: true,
    });
};

// Get notification
export const getNotifications = async () => {
    return axios.get(`${backendURL}/user/notifications/getNotifications`, {
        withCredentials: true,
    });
};

