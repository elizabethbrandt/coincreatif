import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const ProductCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Category
        </Typography>
                <Typography variant="h5" component="h2">
                    Item Name
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Seller
        </Typography>
                <Typography variant="body2" component="p">
                    Description
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">View Item</Button>
                {/* add icon here instead */}
                <Button size="small" variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;