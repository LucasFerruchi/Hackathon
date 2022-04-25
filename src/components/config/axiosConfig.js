import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.covalenthq.com/v1/' 
})

export default axiosClient;