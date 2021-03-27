import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, CardContent, Typography, IconButton } from '@material-ui/core';
import AddCart from "./addCart";
import FavoriteBtn from '../FavoriteBtn';
import ProductModal from '../ProductModal';

const useStyles = makeStyles({
    media: {
        height: "100px",
        paddingTop: '56.25%'
    },
});


const ProductCard = ({product}) => {
    const classes = useStyles();
    const {itemName, imageId, price, _id} = product;
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
                    <ProductModal itemId={_id} />
                </IconButton>
                <AddCart/>
                <FavoriteBtn />
            </CardActions>
        </Card>
    )
}

export default ProductCard;