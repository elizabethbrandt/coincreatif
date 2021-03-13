import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function FileUpload() {

  const [image, setImage] = useState("");

  const handleFileChange = e => {
    const {image} = e.target.files
    setImage(image)
    console.log(image);
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData();
    for (let key of Object.keys({handleFileChange})) {
      formData.append("imgCollection", {handleFileChange}[key])
    }

    API.addPosts(image).then(results => {
      console.log(results.data);
    })
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <h3>Upload Files</h3>
          <div className="form-group">
              <input type="file" name="imgCollection" onChange={handleFileChange} value={image}multiple/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Upload</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FileUpload;