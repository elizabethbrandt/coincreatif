import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, CardContent, Typography, IconButton } from '@material-ui/core';
import ProductModal from '../ProductModal';

const useStyles = makeStyles({
    media: {
        height: "100px",
        paddingTop: '56.25%'
    },
});


const SellerProduct = ({product}) => {
    const classes = useStyles();
    const {itemName, image, price, _id} = product;
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={image.includes("http") ? image : "/images/" + image}
            />
            <CardContent>
                <Typography variant="h5" component="h2">{itemName}</Typography>
                <Typography variant="h6" component="h2">${price}</Typography>
            </CardContent>

            <CardActions>
                <IconButton>
                    <ProductModal itemId={_id} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default SellerProduct;