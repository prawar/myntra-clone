import React, { useContext } from "react";

import ActionAreaCard from "../../card/ActionAreaCard";
import { DataContext } from "../../../context/DataContext";

import { Box, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Items = () => {
  const { itemList, sortBy, setSortBy } = useContext(DataContext);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSortBy(event.target.value);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#ffffff",
        p: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          height:'40px',
          alignItems: "center",
        }}
      >
        <FormControl sx={{display: 'flex', alignItems:'center'}}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Sort By"
            sx = {{width:'250px'}}
            onChange={handleChange}
          >
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="title">Title</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {itemList.map((v, index) => (
            <Grid item xs={1} sm={4} md={3} key={index}>
              <ActionAreaCard
                index={v.id}
                brand={v.brand}
                title={v.title}
                size={v.size}
                price={v.Price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Items;
