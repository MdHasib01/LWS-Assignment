import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://json-video-server.herokuapp.com/api",
});

export default axiosInstance;
