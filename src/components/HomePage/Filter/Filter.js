import { Box, Typography, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import CategoryList from "./CategoryList";
import BrandList from "./BrandList";
import PersonTypeList from "./PersonTypeList";

const Filter = () => {
  const ClearAll = () => {
    alert('Cleared All Filters');
  };

  return (
    <Box
      sx={{
        minWidth: '250px',
        maxWidth: '250px',
        p: "10px",
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{ display: "inline", pl: "10px" }}
        >
          Filters
        </Typography>
        <IconButton onClick={ClearAll} style={{ color: "#ff003c" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <PersonTypeList />
      <CategoryList />
      <BrandList />
    </Box>
  );
};

export default Filter;
