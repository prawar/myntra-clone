import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import ImagePage from "./ImagePage/ImagePage";
import DetailPage from "./DetailPage/DetailPage";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Box sx={{ mt: "65px", display: "flex" }}>
      <ImagePage />
      <DetailPage index ={id}/>
    </Box>
  );
};

export default ProductPage;
