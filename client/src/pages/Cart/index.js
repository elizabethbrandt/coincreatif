import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Container, Grid, Typography} from '@material-ui/core';
import CartCard from './cartCard';
import Checkout from './checkout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        textAlign: "center",
        padding: "5px"
    }
  }));

export default function Cart() {
    const classes = useStyles();
  return (
 
      
      <Container maxWidth="lg">

        <Grid container spacing={3} className={classes.root}>
            
            <Grid item xs={7}>
              <Typography className={classes.title} variant="h3">YOUR CART::</Typography>

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