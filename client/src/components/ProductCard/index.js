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


const ProductCard = ({product}) => {
    const classes = useStyles();
    const {itemName, imageId, price} = product;
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
                <Button size="small" variant="outlined" href="/">View Item</Button>
                <IconButton aria-label="settings">
                    <FavoriteBtn />
                </IconButton>
                <IconButton>
                    <AddShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductCard;