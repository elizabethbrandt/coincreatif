import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import {IconButton} from '@material-ui/core';
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
            <IconButton>
                <GitHubIcon fontSize="large" color="secondary"
                href="https://github.com/Am-White"/>
                </IconButton>

                <IconButton>
                <LinkedInIcon fontSize="large" color="secondary"
                href="https://www.linkedin.com/in/amethyst-white-1942761b7/"/>
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
        <IconButton>
            <GitHubIcon fontSize="large" color="secondary"
            href="https://github.com/jkaganovsky"/>
            </IconButton>

            <IconButton>
            <LinkedInIcon fontSize="large" color="secondary"
            href="https://www.linkedin.com/in/jailanie-kaganovsky-573a00116/"/>
            </IconButton>
        </CardActions>
        </Card>

        </div>

    
  );
}
