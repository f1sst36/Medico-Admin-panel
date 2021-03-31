import axios from "axios";

const prefix = "/api/v1";
const baseURL = process.env.BACKEND_URL || "localhost:8080";

const _axiosInstance = axios.create({
    baseURL: baseURL + prefix,
});

_axiosInstance.interceptors.request.use((config) => {
    const accessToken =
        localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");

    if (accessToken) config.headers.accessToken = `${accessToken}`;

    return config;
});

export const axiosInstance = _axiosInstance;
