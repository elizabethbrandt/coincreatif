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

  const handleAppend = (itemField, value) => {
    setFileData(itemField, value);
  }

  formData.append("image", fileData);

  console.log("FILE Data", fileData);
  console.log("FORM Data", formData);
  

  return (
    <form className={classes.root} noValidate autoComplete="off"  action="/api/products" method="post" encType="multipart/form-data"  >
      <div>
        {console.log(currentUser.uid)}
        <input type="hidden" value={currentUser.uid} name="sellerId" />
        <Typography variant="h4">Add Your Product</Typography>
        {/* Item Name */}
        <TextField
            required
            name="itemName"
            label="Item Name"
            placeholder="Product Name"
            variant="outlined"
           
        />
        {/* Category */}
        <TextField
            required
            name="category"
            id="outlined-select-currency"
            select
            label="Select item category"
            
            variant="outlined"
            
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
            
        />
        {/* Number Available */}
        <TextField
            required
            name="available"
            label="Number of items available"
            placeholder="Number of items available"
            variant="outlined"
            
          />
      </div>
      <Typography variant="h6">Upload photos</Typography>
      <div className="form-group">
          <input
            type="file"
             
            name="avatar"
            accept="image/*"
            
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