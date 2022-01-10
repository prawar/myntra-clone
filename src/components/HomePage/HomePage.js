import Items from "./Items/ItemsList";
import Filter from "./Filter/Filter.js";
import { Box} from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{mt:'65px', display: "flex" }}>
      <Filter />
      <Items/>
    </Box>
  );
};

export default HomePage;
