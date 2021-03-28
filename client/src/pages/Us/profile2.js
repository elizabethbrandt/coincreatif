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

export default function ProfileCard2() {
  const classes = useStyles();

  return (
        <div>

        <Card className={classes.root} style={{marginBottom:"30px"}}>
            <CardActionArea>
                <CardMedia
                className={classes.profile}
                component="img"
                alt="Picture of Amethyst White"
                image="https://avatars.githubusercontent.com/u/71200703?v=4"
                title="Picture of Amethyst White"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Amethyst White
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.icons}>
            <IconButton component="a"  href="https://github.com/Am-White">
                <GitHubIcon fontSize="large" color="secondary"/>
                </IconButton>

                <IconButton component="a" href="https://www.linkedin.com/in/amethyst-white-1942761b7/">
                <LinkedInIcon fontSize="large" color="secondary"/>
                </IconButton>
            </CardActions>
            </Card>

        <Card className={classes.root} style={{marginBottom:"30px"}}>
        <CardActionArea>
            <CardMedia
            className={classes.profile}
            component="img"
            alt="Picture of Jailanie Kaganovsky"
            image="https://avatars.githubusercontent.com/u/72058563?v=4"
            title="Picture of Jailanie Kaganovsky"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Jailanie Kaganovsky
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.icons}>
        <IconButton component="a" href="https://github.com/jkaganovsky">
            <GitHubIcon fontSize="large" color="secondary"/>
            </IconButton>

            <IconButton component="a" href="https://www.linkedin.com/in/jailanie-kaganovsky-573a00116/">
            <LinkedInIcon fontSize="large" color="secondary"/>
            </IconButton>
        </CardActions>
        </Card>

        </div>

    
  );
}
