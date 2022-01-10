import {
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useContext } from "react";

import { DataContext } from '../../../context/DataContext';

const CategoryList = () => {

  const {categoryList, setCategoryList} = useContext(DataContext);

  const handleChange  = (label) => {
    console.log(label);
    const index = categoryList.indexOf(label);
    if(index > -1){
        let list = [...categoryList];
        list.splice(index,1)
        setCategoryList(list);
    }else setCategoryList([...categoryList,label]);
  }
    
  const customCheckBox = (label) => (
    <Checkbox
      onChange={e => handleChange(label)}
      size="small"
      sx={{
        width: 25,
        height: 25,
        "&.Mui-checked": {
          color: "#ff3f6c",
        },
      }}
    />
  );

  return (
    <Box
      sx={{
        p: "10px",
        pl: "30px",
        borderTop: 1,
        borderRight: 1,
        borderBottom: 1,
        borderColor: "#cdcdcd",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ fontSize: 16, fontWeight: 550, pb: "10px", color: "#464646" }}
      >
        CATEGORIES
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={customCheckBox("shirt")}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Shirt
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox('t-shirt')}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              T-Shirt
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox('blazer')}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Blazer
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox('pants')}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Pants
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox('trouser')}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Trouser
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );
};

export default CategoryList;
