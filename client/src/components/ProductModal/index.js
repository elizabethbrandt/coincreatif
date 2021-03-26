import React, { useEffect, useState } from 'react';
import { makeStyles, Modal } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ItemView from '../ItemView';
import API from '../../utils/products';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ProductModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [item, setItem] = useState([]);

  useEffect(() => {
      API.getItemData()
          .then(({ data }) => {
              setItem(data)
              console.log("Data", data)
          })
  }, []);
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ItemView item={item} key={item._id}/>
    </div>
  );

  return (
    <div>

      <InfoIcon className={classes.button} onClick={handleOpen} color="default" fontSize="large"/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ProductModal;