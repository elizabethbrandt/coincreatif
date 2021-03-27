import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';

const Search2 = ({products}) => {

    const [search, setSearch] = useState("");

    const handleInputChange = e => {
        setSearch({search: e.target.value})
    }

    const items = products.filter((data) => {
        if(search == null)
            return null
        else if(
           data.itemName.toLowerCase().includes(search.toLowerCase())
        || data.category.toLowerCase().includes(search.toLowerCase())
        || data.description.toLowerCase().includes(search.toLowerCase())
        || data.price.toLowerCase().includes(search.toLowerCase())){
            return data
        }
      }).map(data=>{

          return (
              <div >
                  <SearchIcon />
      
                  <InputBase
                  placeholder="Search for items here"
                  onChange={handleInputChange}
                  inputProps={{ 'aria-label': 'search' }}
                  />
                  {items}
              </div>
            )
      }
      )
}

export default Search2;