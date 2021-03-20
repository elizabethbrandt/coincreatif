import React from 'react';
import clsx from 'clsx';
import { makeStyles, Drawer, Button, List, Divider, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LooksIcon from '@material-ui/icons/Looks';
import ListIcon from '@material-ui/icons/List';

import app from "../../utils/base";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Divider />
      <List>
        {['Home'].map((text) => (
          <ListItem button component="a" href="/" key={text}>
            <ListItemIcon><HomeTwoToneIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['My Market'].map((text) => (
          <ListItem button component="a" href="/mymarket" key={text}>
            <ListItemIcon><StorefrontTwoToneIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {['Jewelry/Accessories'].map((text) => (
          <ListItem button component="a" href="#" key={text}>
            <ListItemIcon><LooksIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Home/Decor'].map((text) => (
          <ListItem button component="a" href="#" key={text}>
            <ListItemIcon><FilterVintageIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Clothes/Shoes'].map((text) => (
          <ListItem button component="a" href="#" key={text}>
            <ListItemIcon><LooksIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Handmade Art'].map((text) => (
          <ListItem button component="a" href="#" key={text}>
            <ListItemIcon><FilterVintageIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Entertainment'].map((text) => (
          <ListItem button component="a" href="#" key={text}>
            <ListItemIcon><LooksIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider/>
      
      <List>
        {['Login/Signup'].map((text) => (
          <ListItem button component="a" href="/login" key={text}>
            <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Logout'].map((text) => (
          <ListItem 
          button 
          component="a" href="/login" 
          key={text}
          onClick={() => app.auth().signOut()}>
            <ListItemIcon><ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ListIcon fontSize="large" /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
