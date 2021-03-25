import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard";
import UploadModal from "../../components/UploadModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Market() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant ="h3">
        MY MARKET
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <ProfileCard />
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant ="h4">
              MY PRODUCTS
            </Typography>
            <UploadModal />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Market;