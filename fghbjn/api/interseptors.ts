import axios from "axios";
import { getAccessToken } from "@/helpers/auth-helpers";

const API_URL = process.env.API_URL;

const http = axios.create({
    baseURL: API_URL || "https://store.go-clothes.uz/v1",
});

http.interceptors.request.use((config) => {
    const access_token = getAccessToken();
    if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default http;
