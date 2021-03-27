import ProductInfo from '../../seeds';
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBtn from '../FavoriteBtn';
import ProductModal from '../ProductModal';
import ProductCard from '../ProductCard';
class SearchBar extends Component {

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
      || data.category.toLowerCase().includes(this.state.search.toLowerCase())
      || data.price.toLowerCase().includes(this.state.search.toLowerCase())
      || data.description.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
        
        
        <Card style={{width:"20%"}}>
        <CardMedia
            
            image={data.imageId} style={{height:"100px", paddingTop:"56.25%"}}
        />
        <CardContent>
            <Typography variant="h5" component="h2">{data.itemName}</Typography>
            <Typography variant="h5" component="h2">${data.price}</Typography>
        </CardContent>

        <CardActions>
            <IconButton>
                <ProductModal itemId={data._id} />
            </IconButton>
            <IconButton>
                <AddShoppingCartOutlinedIcon fontSize="large" />
            </IconButton>
            <FavoriteBtn />
        </CardActions>
    </Card>
     
      )
    })

    return (
          <div>
            
            <SearchIcon />
            
            <InputBase
              placeholder="Search…"
              
              onChange={(e)=>this.searchSpace(e)}
              inputProps={{ 'aria-label': 'search' }}
            />
            {items}
          </div>
    )
  }
}

export default SearchBar;