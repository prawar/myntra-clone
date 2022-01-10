import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import { Box, Toolbar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {DataContext} from '../../../context/DataContext';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#989898', 0.15),
  '&:hover': {
    backgroundColor: alpha('#949494', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

/*
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
*/

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

/*
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
*/

const SearchBar = () => {

  const {search, setSearch} = React.useContext(DataContext);
  const [currVal, setCurrVal] = React.useState('');

  const handleChange = (e) => {
    if(e.target.value==""){
      setSearch("");
    }
    setCurrVal(e.target.value);
  }

  const handleKeyPress = (e) => {
    console.log(e.key);
    if(e.key === 'Enter'){
      setSearch(currVal);
    }
  };
  
  return (
    <Search sx={{alignContent:'center'}}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper >
      <StyledInputBase className="Search"
        value={currVal}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for Produc, Brand, and More…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
export default SearchBar;
