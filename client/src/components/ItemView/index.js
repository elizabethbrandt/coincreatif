import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, CardContent, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBtn from '../FavoriteBtn';

const useStyles = makeStyles({
    media: {
        height: "100px",
        paddingTop: '56.25%'
    },
});

const ItemView = ({item}) => {

  const classes = useStyles();
  const {itemName, image, price, description, available} = item;
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography variant="h5" component="h2">{itemName}</Typography>
                <Typography variant="h5" component="h2">${price}</Typography>
                <Typography variant="h5" component="h2">Description: {description}</Typography>
                <Typography variant="h5" component="h2">In Stock: {available}</Typography>
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
