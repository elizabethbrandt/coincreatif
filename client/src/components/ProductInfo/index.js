import React from 'react';
import { Checkbox, FormControlLabel, FormControl, Grid, TextField, makeStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function ProductInfo() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    numberformat: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid container xs={6}>
          <TextField
            required
            id="outline-required"
            label="Amount"
            placeholder="$"
            variant="outlined"
            value={values.numberformat}
            onChange={handleChange}
            name="numberformat"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <TextField
              required
              name="description"
              label="Description"
              placeholder="Product Description"
              variant="outlined"
          />
        </Grid>
        <Grid container xs={6}>
          <TextField
              required
              name="itemName"
              label="Product"
              placeholder="Product Name"
              variant="outlined"
          />
          <FormControl component="fieldset">
            <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="In Stock?"
            labelPlacement="end"
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default ProductInfo;