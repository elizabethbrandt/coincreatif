import axios from "axios";

const API = {

    getProductData: () => {
        return axios.get(`/api/products`)
    },
    getItemData: (id) => {
      return axios.get(`/api/products/${id}`)
    },
}

export default API;