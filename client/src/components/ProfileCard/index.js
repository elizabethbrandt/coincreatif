import React from "react";
import { Avatar, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ProfileCard() {
  const classes = useStyles();

  return (
    <div className="classes.root">
      <Paper className={classes.paper}>
        <Typography variant="h4">
          MY PROFILE
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            {/* Change src to dynamically update according to a user image/avatar */}
            <Avatar alt="Profile" src="../apple-touch-icon.png" className={classes.large}/>
          </Grid>
          <Grid item xs={12} sm container>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ProfileCard;