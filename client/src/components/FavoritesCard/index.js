import { makeStyles, Paper, Typography } from '@material-ui/core';
// import ProductCard from '../ProductCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FavoriteCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">
        MY FAVORITES
      </Typography>
      <Typography variant="subtitle1">
        Coming Soon...
      </Typography>
      {/* <ProductCard /> */}
    </Paper>
  )
}

export default FavoriteCard;