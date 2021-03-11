import React, { Component } from "react";
import axios from "axios";

class FileUpload extends Component {

  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      imgCollection: ""
    }
  }

  onFileChange(e) {
    this.setState({ imgCollection: e.target.files })
  }

  onSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
    for (let key of Object.keys(this.state.imgCollection)) {
      formData.append("imgCollection", this.state.imgCollection[key])
    }

    axios.post("http://localhost:3000/api/upload-images", formData, {})
    .then(res => {
      console.log(res.data);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <h3>Upload Files</h3>
            <div className="form-group">
                <input type="file" name="imgCollection" onChange={this.onFileChange} multiple/>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">Upload</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FileUpload;