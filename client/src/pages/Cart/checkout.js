import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: "50px"
  },
  media: {
    height: "500px",
    maxHeight: "550px",
    width: "100%",
    objectFit: "cover",
    display: "flex"
  },
});

export default function Checkout() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
      image="https://i.ibb.co/kJZHnCJ/Screen-Shot-2021-03-27-at-1-23-54-PM.png"
      title="product"/>
    </Card>
  );
}
