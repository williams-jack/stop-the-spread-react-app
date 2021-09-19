import axios from "axios";
import { backendURL } from "../serviceConstants";

const getBusinessNames = () => {
    return axios.get(`${backendURL}/user/businessInfo/businessNames`, {
        withCredentials: true,
    });
};

const getAddressFromBusinessName = (businessNameParams) => {
    return axios.get(`${backendURL}/user/businessInfo/getBusinessLocations`, {
        params: businessNameParams,
        withCredentials: true,
    });
};

export { getBusinessNames, getAddressFromBusinessName };
