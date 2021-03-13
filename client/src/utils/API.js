/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getPosts: function(image) {
    console.log("Image:", image);
    return axios.get("api/upload-images/" + image)
  },

  addPosts: function(formData) {
    console.log("Form Data:", formData);
    return axios.post("/api/upload-images/" + formData);
  }
};