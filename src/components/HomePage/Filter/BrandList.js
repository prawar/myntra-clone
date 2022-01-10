import {
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useContext } from "react";

import { DataContext } from '../../../context/DataContext';

const BrandList = () => {

  const {brandList, setBrandList} = useContext(DataContext);

  const handleChange  = (label) => {
    console.log(label);
    const index = brandList.indexOf(label);
    if(index > -1){
        let list = [...brandList];
        list.splice(index,1)
        setBrandList(list);
    }else setBrandList([...brandList,label]);
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
        BRAND
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={customCheckBox("roadster")}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Roadster
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox("puma")}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Puma
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox("wrogn")}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              WROGN
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox("hrx by hritik roshan")}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              HRX by Hritik Roshan
            </Typography>
          }
        />
        <FormControlLabel
          control={customCheckBox("moda rapido")}
          label={
            <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
              Moda Rapido
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );
};

export default BrandList;
