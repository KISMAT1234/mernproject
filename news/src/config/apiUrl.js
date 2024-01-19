import axios from "axios";

const apiUrl = axios.create({
    baseURL: "http://localhost:8000"
});

export default apiUrl;