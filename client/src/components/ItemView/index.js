import { useEffect, useState } from "react";
import API from "../../utils/products";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBtn from '../FavoriteBtn';

const useStyles = makeStyles({
    media: {
        height: "100px",
        paddingTop: '56.25%'
    },
});

const ItemView = () => {

  const [item, setItem] = useState([]);

  useEffect(() => {
      API.getItemData()
          .then(({ data }) => {
              setItem(data)
              console.log("Data", data)
          })
  }, []);

  const classes = useStyles();
  const {itemName, imageId, price} = item;
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={imageId}
            />
            <CardContent>
                <Typography variant="h5" component="h2">{itemName}</Typography>
                <Typography variant="h5" component="h2">${price.$numberDecimal}</Typography>
            </CardContent>

            <CardActions>
                <IconButton>
                    <AddShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <FavoriteBtn />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ItemView;