import ProductInfo from '../../seeds';

import React, { Component } from 'react';

class Search extends Component {

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
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span >{data.itemName}</span>
            <span >{data.category}</span>
            <span >{data.description}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" onClick={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default Search;