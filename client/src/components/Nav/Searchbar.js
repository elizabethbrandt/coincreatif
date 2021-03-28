import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

const SearchBar = ({handleInputChange}) => {

    return (
        <div >
              <FindInPageOutlinedIcon fontSize="large" style={{float:"left", marginTop:"5px"}}/>
              
              <TextField
                id="outlined-secondary"
                label="Search..."
                style={{width:"auto", maxWidth:"450px", display:"flex"}}
                variant="outlined"
                color="secondary"
                onChange={(e) => handleInputChange(e)}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
      }


export default SearchBar;