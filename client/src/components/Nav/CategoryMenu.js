/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Products from '../../pages/Products';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={Products.itemName}
      getOptionLabel={(product) => product.itemName}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}
