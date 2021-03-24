import ProductInfo from '../../seeds';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
  media: {
      height: "100px",
      paddingTop: '56.25%'
  },
});

class ProductCard extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    
    // eslint-disable-next-line array-callback-return
    const items = ProductInfo.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(
         data.itemName.toLowerCase().includes(this.state.search.toLowerCase()) 
      || data.category.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
            <Card>
            <CardMedia
                className={data.media}
                image={data.imageId}
            />
            <CardContent>
                <Typography variant="h5" component="h2">{data.itemName}</Typography>
                <Typography variant="h5" component="h2">{data.category}</Typography>
                <Typography variant="body2" component="p">${data.price}</Typography>
            </CardContent>

            <CardActions>
                <Button size="small" variant="outlined" href="/">View Item</Button>
                <IconButton aria-label="settings">
                </IconButton>

                <IconButton aria-label="settings">
                    <AddShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
            </CardActions>
        </Card>
      </div>
      )
    })

    return (
      <div >
            <div >
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search…"
              
              onClick={(e)=>this.searchSpace(e)}
              inputProps={{ 'aria-label': 'search' }}
            />
            {items}
          </div>
    )
  }
}

export default ProductCard;