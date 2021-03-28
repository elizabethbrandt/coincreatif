import React, { useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";

function ImageUpload() {
  // Sets a state that manages the file value and decoded image file
  const [fileData, setFileData] = useState();

  // Sets a state that reads the image path on every change and sets it as the file input field value
  const [images, setFile] = useState("");

  // Function to handle the file change where files[0] holds the full information of the uploaded image
  const handleFileChange = e => {
    setFileData(e.target.files[0]); // Full information about the image
    setFile(e.target.value); // Value of the image
  };

  const formData = new FormData();

  formData.append("image", fileData);

  console.log("Image", fileData);

  const handleSubmit = () => {

    axios.post("/api/products", formData)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
  }


  return(
    <div className="container">
      <div className="row">
        {/* Post route action for image to upload using multer */}
        <form action="/api/products" method="post" enctype="multipart/form-data">
          <Typography variant="h6">Upload photos</Typography>
          {/* <img src="/images/${filename}.jpg" alt="${imagename}" /> */}
          <div className="form-group">
              <input
                type="file"
                value={images}
                name="avatar"
                accept="image/*"
                onChange={handleFileChange}
                placeholder="upload image"
                required
                multiple
              />
          </div>
          <div className="form-group">
            <br/>
            <input type="submit" onSubmit={handleSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;