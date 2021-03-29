import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia , IconButton,
Typography, Checkbox, FormControlLabel  } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles({
  root: {
    width: "auto",
    margin: "10px"
  },
  media: {
    height: "150px",
  },
  content: {
      padding: "10px"
  },
});

export default function CartCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/712367/pexels-photo-712367.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          title="product"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Jelly fish named Jelly
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $ 4.91
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor:"lightgrey", maxHeight:"15px"}}>
         <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Gift?"
      />

        <IconButton aria-label="delete"className={classes.delete}>
          <RemoveShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
