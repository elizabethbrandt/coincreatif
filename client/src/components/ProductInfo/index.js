import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, InputAdornment, Typography } from '@material-ui/core';
import { AuthContext } from "../../utils/Auth";

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

export default function ProductInfo({handleClose}) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  return (
    <form className={classes.root}   noValidate autoComplete="off"  action="/mymarket" method="post" encType="multipart/form-data"  >
      <div>
        {console.log(currentUser.uid)}
        <input type="hidden" value={currentUser.uid} name="sellerId" />
        <Typography variant="h4">Add Product</Typography>
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
      <br/>
      <Typography variant="h6">Upload photos</Typography>
      <Typography variant="subtitle2">*File name cannot contain any spaces or special characters</Typography>
      <br/>
      <div className="form-group">
          <input
            type="file"
            name="image"
            accept="image/*"
            placeholder="upload image"
            required
            multiple
          />
      </div>
      <div className="form-group">
        <br/>
        <Button type="submit" variant="contained" color="secondary">Send product to market</Button>
      </div>

    </form>
  );
}