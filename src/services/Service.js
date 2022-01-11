import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = baseUrl

export default axiosInstance
