import axios from "axios";

const API = {
  
    getProductData: () => {
        return axios.get(`/api/products`)
    }
}

export default API;