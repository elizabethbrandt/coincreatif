import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';


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
