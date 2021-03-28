import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent,CardMedia,Typography, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
    marginTop: "30px",
    textAlign: "center"
  },
  icons: {
    justifyContent: "center",
    backgroundColor: "lightgrey"
  },
  profile: {
    borderRadius: "50%",
    maxWidth: "200px",
    height: "200px",
    padding: "5px"
  }
});

export default function ProfileCard1() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root}>
    <CardActionArea>
        <CardMedia
        className={classes.profile}
        component="img"
        alt="Picture of Elizabeth Brandt"
        image="https://images.pexels.com/photos/712367/pexels-photo-712367.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        title="Picture of Elizabeth Brandt"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Elizabeth Brandt
        </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions className={classes.icons}>
        <IconButton component="a" href="https://github.com/elizabethbrandt">
        <GitHubIcon fontSize="large" color="secondary"/>
        </IconButton>

        <IconButton component="a" href="www.linkedin.com/in/elizabeth-brandt-pnw">
        <LinkedInIcon fontSize="large" color="secondary"/>
        </IconButton>
    </CardActions>
    </Card>

    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.profile}
            component="img"
            alt="Picture of Francine Babauta"
            image="https://avatars.githubusercontent.com/u/70370805?v=4"
            title="Picture of Francine Babauta"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Francine Babauta
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.icons}>
            <IconButton  component="a" href="https://github.com/fbabauta">
            <GitHubIcon fontSize="large" color="secondary"/>
            </IconButton>

            <IconButton component="a" href="https://www.linkedin.com/in/francine-babauta/">
            <LinkedInIcon fontSize="large" color="secondary"/>
            </IconButton>
        </CardActions>
        </Card>

    </div>
  );
}
