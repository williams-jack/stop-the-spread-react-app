// AUthentication methods for accounts.
import axios from "axios";
import { backendURL } from "../serviceConstants";
const login = async (jsonPackage) => {
    return axios.post(`${backendURL}/login`, jsonPackage, {
        withCredentials: true,
    });
};

const register = (jsonPackage) => {
    axios.post(`${backendURL}/register`, jsonPackage, {
        withCredentials: true,
    });
};

const logout = () => {
    axios.post(`${backendURL}/logout`, null, {
        withCredentials: true,
    });
};

export { login, logout, register };
