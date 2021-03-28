import React from 'react';
import {CardMedia, Grid} from '@material-ui/core';
import ProfileCard1 from './profile1';
import ProfileCard2 from './profile2';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
        justifyContent: "center",
    },
  }));

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Us() {
    const classes = useStyles();
  return (
        <div style={{marginBottom:"50px"}}>
          <Alert severity="info">Feel free to contact any of us with questions!</Alert>
          <CardMedia
          image="https://images.pexels.com/photos/1117542/pexels-photo-1117542.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          title="Arts and Crafts Background">

        <Grid container className={classes.root}>
            
            <Grid item md={2}>
              <ProfileCard1/>
            </Grid>
            <Grid item md={2}>
              <ProfileCard2/>
            </Grid>
        </Grid>
        </CardMedia>
        </div>
   
  );
}