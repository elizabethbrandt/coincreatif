import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, CardMedia, IconButton } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import TemporaryDrawer from './dropdown';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
            <TemporaryDrawer/>

            <div>
            <CardMedia
              style={{height:"100px", width:"150px"}}
              image="https://i.ibb.co/mJQ8JQD/Artboard-4.png"
              title="Coin Créatif Logo"
              component="a"
              href="/products"
            />
            </div>

          <Typography 
          className={classes.title} 
          variant="h6" 
          noWrap>
         </Typography>
        
          <IconButton 
          aria-label="My Market" 
          component="a" 
          href="/mymarket" 
          className={classes.margin}>

            <StorefrontTwoToneIcon fontSize="large" />
          </IconButton>

          <IconButton 
          aria-label="Checkout" 
          component="a" 
          href="/cart" 
          className={classes.margin}>

            <ShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>

    
  );
}
