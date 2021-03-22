import React from 'react';
import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(1, 1),
  },
  paper: {
    maxWidth: 400,
    margin: 'auto',
    padding: theme.spacing(4),
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ProductCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={6}>
          <Grid item>
            <ButtonBase className={classes.image}>
                {/* Change src to dynamically update per user's mongodb collection */}
              <img className={classes.img} alt="Product" src="../images/IMG_0475.jpg" />
            </ButtonBase>
          </Grid>
        <Grid item>
            <Grid item>
              <Typography variant="subtitle1">$99.00</Typography>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Product Name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Product Description
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  QTY:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ProductCard;