import axios from "axios";
import { getAccessToken } from "@/helpers/auth-helpers";
const API_URL = process.env.API_URL
const http = axios.create({
    baseURL: "https://store.go-clothes.uz/v1/"
})

http.interceptors.request.use((config)=>{
    let access_token = getAccessToken()
    if(access_token){
        config.headers["Authorization"] = access_token
    }
    return config
})
export default http

