import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const Search2 = ({handleInputChange}) => {

    return (
        <div >

            <SearchIcon />

            <InputBase
            placeholder="Search for items here"
            onChange={(e) => handleInputChange(e)}
            inputProps={{ 'aria-label': 'search' }}
            />
            
        </div>
    )
      }


export default Search2;