import React from "react";
import { Grid, makeStyles,CardActionArea, Card, Typography, CardContent } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard";
import UploadModal from "../../components/UploadModal";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    margin: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    minWidth: "100px",
    marginBottom: "50px"
  },
}));

function Market() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant ="h3">MY MARKET</Typography>
      
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <ProfileCard />
        </Grid>

        <Grid item xs={12}>

        <Card className={classes.paper}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                My Products:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Alert severity="warning" style={{justifyContent:"center"}}>Coming soon! Here will be where you will be 
                  able to maintain your products you have posted.</Alert>
                    <br></br>
                  <Alert severity="success" style={{justifyContent:"center"}}>You are able to add items below!</Alert>
              </Typography>
            </CardContent>
          </CardActionArea>

              <UploadModal />
            
        </Card>
        </Grid>

      </Grid>
    </div>
  );
}

export default Market;