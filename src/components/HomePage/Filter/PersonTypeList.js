import {
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Radio,
} from "@mui/material";

import { useContext } from "react";

import { DataContext } from '../../../context/DataContext';

const PersonTypeList = () => {

  const {gender, setGender} = useContext(DataContext);

  const customRadio = (
    <Radio
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


  const handleChange = async (e,v) => {
    e.preventDefault();
    setGender(v);
  }

  return (
    <Box
      sx={{
        borderTop: 1,
        borderRight: 1,
        borderBottom: 1,
        borderColor: "#cdcdcd",
        p: "10px",
        pl: "30px",
      }}
    >
      <FormControl component="fieldset">
        <RadioGroup
          value={gender}
          onChange={handleChange}
          aria-label="gender"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="All"
            control={customRadio}
            label={
              <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
                All
              </Typography>
            }
          />
          <FormControlLabel
            value="Female"
            control={customRadio}
            label={
              <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
                Female
              </Typography>
            }
          />
          <FormControlLabel
            style={{ color: "#3b3b3b" }}
            value="Male"
            control={customRadio}
            label={
              <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
                Male
              </Typography>
            }
          />
          <FormControlLabel
            style={{ color: "#3b3b3b" }}
            value="Boys"
            control={customRadio}
            label={
              <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
                Boys
              </Typography>
            }
          />
          <FormControlLabel
            style={{ color: "#3b3b3b" }}
            value="Girls"
            control={customRadio}
            label={
              <Typography sx={{ color: "#3b3b3b", fontSize: "16px" }}>
                Girls
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};


export default PersonTypeList;
