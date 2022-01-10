import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

import { Routes, Route} from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default Home;
