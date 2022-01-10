import * as React from "react";

import { IconButton, Badge, Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { DataContext } from "../../../context/DataContext";

const Notification = () => {
  
  const {wishList, cartList} = React.useContext(DataContext);

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={wishList.length} color="error">
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>
      
      <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={cartList.length} color="error">
          <ShoppingBagOutlinedIcon />
        </Badge>
      </IconButton>

    </Box>
  );
};
export default Notification;
