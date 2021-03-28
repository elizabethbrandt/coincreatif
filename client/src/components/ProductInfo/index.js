import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { InputAdornment, Typography } from '@material-ui/core';
import { AuthContext } from "../../utils/Auth";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
}));

const categories = [
  {
    value: 'Art',
    label: 'Art',
  },
  {
    value: 'Jewelry',
    label: 'Jewelry',
  },
  {
    value: 'Clothing',
    label: 'Clothing',
  },
  {
    value: 'Home Decor',
    label: 'Home Decor',
  },
  {
    value: 'Entertainment',
    label: 'Entertainment',
  },
];

export default function ProductInfo() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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

  const handleAppend = (itemField, fileData) => {
    formData.append(itemField, fileData);
  }

  formData.append("image", fileData);

  console.log("FILE Data", fileData);
  console.log("FORM Data", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/products", formData)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
  }

  return (
    <form className={classes.root} noValidate autoComplete="off"  action="/api/products" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div>
        <div value={currentUser.uid} name="sellerId"></div>
        <Typography variant="h4">Add Your Product</Typography>
        {/* Item Name */}
        <TextField
            required
            name="itemName"
            label="Item Name"
            placeholder="Product Name"
            variant="outlined"
            onChange={(e) => {handleAppend("itemName", e.target.value)}}
        />
        {/* Category */}
        <TextField
            required
            name="category"
            id="outlined-select-currency"
            select
            label="Select item category"
            value={category}
            onClick={handleChange}
            variant="outlined"
            onChange={(e) => {handleAppend("category", e.target.value)}}
            >
            {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
        </TextField>
        {/* Description */}
        <TextField
            required
            name="description"
            label="Item description"
            placeholder="Item Description"
            variant="outlined"
            onChange={(e) => {handleAppend("description", e.target.value)}}

          />
        {/* Price */}
        <TextField
            required
            name="price"
            label="Price"
            id="outlined-start-adornment"
        //   className={clsx(classes.margin, classes.textField)}
            InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            variant="outlined"
            onChange={(e) => {handleAppend("price", e.target.value)}}
        />
        {/* Number Available */}
        <TextField
            required
            name="available"
            label="Number of items available"
            placeholder="Number of items available"
            variant="outlined"
            onChange={(e) => {handleAppend("available", e.target.value)}}
          />
      </div>
      <Typography variant="h6">Upload photos</Typography>
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
        <input type="submit" />
      </div>

    </form>
  );
}