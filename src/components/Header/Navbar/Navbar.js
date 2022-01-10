import * as React from 'react';

import {Tabs, Tab, Box} from '@mui/material/';


const Navbar=()=> {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{pl: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Men" />
        <Tab value="two" label="Women" />
        <Tab value="three" label="Kids" />
        <Tab value="four" label="Home & Livings" />
        <Tab value="five" label="Beauty" />
      </Tabs>
    </Box>
  );
}
export default Navbar;
