import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [fileData, setFileData] = useState();
  const [images, setFile] = useState("");

  const handleFileChange = e => {
    setFileData(e.target.files[0]);
    setFile(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", fileData);

    await axios.post("/api/images", formData)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
  };

  return(
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <h3>Upload Files</h3>
          <div className="form-group">
              <input type="file" name="imgCollection" onChange={handleFileChange} value={images}multiple accept="image/*" placeholder="upload image" isrequired="true" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;