import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper } from '@material-ui/core';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/Settings';
import PaletteIcon from '@material-ui/icons/Palette';
import BuildIcon from '@material-ui/icons/Build';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: "60px",
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(25),
      padding: theme.spacing(2),
      marginBottom: '5%',
    },
  },
  paper: {
    textAlign: "center",
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper} >
          <Typography variant="h3" >
              About Us
          </Typography>
          <Typography variant="body1">
              We are a group of young and ambitious women from the pacific north west
               who have an interest in arts while also perusing careers in software engineering.

            <Button
            component="a"
            variant="contained"
            color="secondary"
            href="/us"
          >
            <ContactsIcon/> 
              Meet the developers!
            </Button>
          </Typography>
      </Paper>
      <Paper elevation={3} className={classes.paper} >
          <Typography variant="h3">
              Our Goal
          </Typography>
          <Typography variant="body1">
              We want to make a simple and accessible platform for artists and creators to show,
              promote and sell their work.
          </Typography>
            <br></br>
          <PaletteIcon fontSize="large" color="secondary"/> 
          <LoyaltyIcon fontSize="large" color="secondary"/>
          <BuildIcon fontSize="large" color="secondary"/>
      </Paper>
      <Paper elevation={3} className={classes.paper} >
          <Typography variant="h3">
              Our Dream
          </Typography>
          <Typography variant="body1">
              We have big dreams for this site! We want to be able to connect people in the areas
              they live in to items available near there in the future and much more!
              <Button
            component="a"
            variant="contained"
            color="secondary"
            href="https://github.com/elizabethbrandt/coincreatif"
          >
            <SettingsIcon/> 
              Take a look at our code!
            </Button>
          </Typography>
      </Paper>
      
    </div>
  );
}