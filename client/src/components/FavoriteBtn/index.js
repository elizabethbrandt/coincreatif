import React from "react";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormControlLabel, Checkbox } from '@material-ui/core';

function FavoriteBtn() {
  // const [favorites, setFavorites] = useState();

  // const addFav = (props: any) => {
  //   let array = favorites;
  //   let addArray = true;
  //   array.map((item: any, key: number) => {
  //     if (item === props.i) {
  //       array.spice(key, 1);
  //       addArray = false;
  //     }
  //   });
  //   if (addArray) {
  //     array.push(prop.i);
  //   }
  //   setFavorites([...array])
  // }

  // setFavorites([...array])
  // }


  return (
    <FormControlLabel
      control={<Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        name="favorite" />}
    />
  )
}

export default FavoriteBtn;
