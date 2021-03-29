import { makeStyles, Paper, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "5px"
  },
}));

function FavoriteCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">
        My Favorites:
      </Typography>
      <Alert severity="warning" style={{justifyContent:"center"}}>
        Coming soon! Here will be all your favorite items
      </Alert>
      {/* <ProductCard /> */}
    </Paper>
  )
}

export default FavoriteCard;