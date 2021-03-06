import React from 'react';
import {Container, Grid, Typography, makeStyles} from '@material-ui/core';
import CartCard from '../../components/Cart';
import Checkout from '../../components/Checkout';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        textAlign: "center",
        padding: "5px"
    }
  }));

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Cart() {
    const classes = useStyles();
  return (


      <Container maxWidth="lg" style={{marginBottom:"60px"}}>

        <Grid container spacing={3} className={classes.root}>

            <Grid item xs={7}>
              <Typography className={classes.title} variant="h3">YOUR CART:</Typography>
              <Alert severity="error">You cannot currently checkout! COMING SOON</Alert>

              <CartCard/>
              <CartCard/>
            </Grid>

            <Grid item xs={5}>
                <Checkout/>
            </Grid>
        </Grid>
      </Container>

  );
}