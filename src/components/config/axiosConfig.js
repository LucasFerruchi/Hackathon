import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://api.covalenthq.com/v1/' 
})

export default axiosApi;