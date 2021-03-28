
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const styles = {
  appBar: {
    top: "auto",
    bottom: 0,
    maxHeight: "52px"
  },

  
};

function Footer({ classes }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar style={{justifyContent:"center"}}>
          <Typography  component="body1">© 2021 made with  <FavoriteBorderIcon/></Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);