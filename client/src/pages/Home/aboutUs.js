import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(20),
      padding: theme.spacing(2),
      marginBottom: '5%'
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
          <Typography variant="h3" >
              About Us
          </Typography>
          <Typography variant="body1">
              We are a group of young and ambitious women from the pacific north west
               who have an interest in arts while also perusing careers in software engineering.
          </Typography>
      </Paper>
      <Paper elevation={3}>
          <Typography variant="h3">
              Our Goal
          </Typography>
          <Typography variant="body1">
              We want to make a simple and accessible platform for artists and creators to show,
              promote and sell their work.
          </Typography>
      </Paper>
      <Paper elevation={3}>
          <Typography variant="h3">
              Our Dream
          </Typography>
          <Typography variant="body1">
              We have big dreams for this site! We want to be able to connect people in the areas
              they live in to items available near there in the future and much more!
          </Typography>
      </Paper>
      
    </div>
  );
}