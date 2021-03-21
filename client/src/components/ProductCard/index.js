import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: "100px",
        paddingTop: '56.25%', // 16:9
    },
});


const ProductCard = (props) => {
    const classes = useStyles();
    const {itemName, imageId, price} = props;
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={imageId}
            />
            <CardContent>
                <Typography variant="h5" component="h2" itemName={itemName} />
                <Typography variant="body2" component="p" price={price} />
            </CardContent>

            <CardActions>
                <Button size="small" variant="outlined" href="/">View Item</Button>
                <IconButton aria-label="settings">
                </IconButton>

                <IconButton aria-label="settings">
                    <AddShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductCard;