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
      padding: theme.spacing(2)
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
              ...
          </Typography>
      </Paper>
      <Paper elevation={3}>
          <Typography variant="h3">
              Our Goal
          </Typography>
          <Typography variant="body1">
              ...
          </Typography>
      </Paper>
      <Paper elevation={3}>
          <Typography variant="h3">
              Our Dream
          </Typography>
          <Typography variant="body1">
              ...
          </Typography>
      </Paper>
      
    </div>
  );
}