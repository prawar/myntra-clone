import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import {Box} from '@mui/material';
import "@coreui/coreui/dist/css/coreui.min.css";

import a from '../../../images/a.jpg'
import b from '../../../images/b.jpg'
import c from '../../../images/c.jpg'


const ImagePage = () => {
  return (
    <Box sx={{maxWidth:'50%', flexGrow: 1, p: '20px' }}>
      <CCarousel interval={false} controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={a} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={b} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={c} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </Box>
  );
};

export default ImagePage;
