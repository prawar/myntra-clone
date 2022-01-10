import * as React from 'react';

import {AppBar, Box, Toolbar, Typography} from '@mui/material';

import Logo from "../../images/myntra-logo.png";


import Navbar from "./Navbar/Navbar";
import Notification from "./Notification/Notification";
import SearchBar from './SearchBar/SearchBar';

import { useNavigate } from 'react-router-dom';

const ButtonAppBar=()=> {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/myntra-demo/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: "black", height: '57px'}}>
        <Toolbar>
          <Typography onClick={handleClick} variant="h6" component="div">
          <img src={Logo} alt="" width= "60"/>
          </Typography>
          <Navbar />
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <Notification />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
