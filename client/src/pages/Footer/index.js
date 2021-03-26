import React from "react";
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const FooterPage = () => {
  return (
    <AppBar position="relative" color="primary">
    <Container>
      <Toolbar>
        <Typography variant="body1" color="inherit" style={{marginLeft:"41%", marginRight:"41%"}}>
          &copy; 2021  Made with <FavoriteIcon color="secondary" fontSize="small" />
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default FooterPage;