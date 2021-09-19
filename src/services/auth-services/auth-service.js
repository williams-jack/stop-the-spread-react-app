// AUthentication methods for accounts.
import axios from "axios";
import { backendURL } from "../service-constants";
const login = async (jsonPackage) => {
    console.log(`${backendURL}/login`);
    console.log(jsonPackage);
    return axios.post(`${backendURL}/login`, jsonPackage, {
        withCredentials: true,
    });
};

const register = (jsonPackage) => {
    axios
        .post(`${backendURL}/register`, jsonPackage, {
            withCredentials: true,
        })
        .then((res) => {
            return {
                data: res.data,
                status: res.status,
            };
        })
        .catch((err) => {
            console.error(err);
        });
};

const logout = () => {
    axios
        .post(`${backendURL}/logout`, null, {
            withCredentials: true,
        })
        .then((res) => {
            return res.status;
        })
        .catch((err) => {
            console.error(err);
        });
};

export { login, logout, register };
