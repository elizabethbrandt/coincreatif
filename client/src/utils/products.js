const API = {
  
    async getProductData() {
      const res = await fetch(`/api/products`);
      const json = await res.json();
  
      return json;
    },
};

module.exports = API;