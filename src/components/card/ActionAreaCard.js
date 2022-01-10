import React, { useContext, useState, useEffect } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material/";

import a from '../../images/a.jpg'
import b from '../../images/b.jpg'
import c from '../../images/c.jpg'

import { FavoriteBorder, Favorite } from "@mui/icons-material";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const ActionAreaCard = (props) => {
  const { wishList, setWishList } = useContext(DataContext);
  const [wish, setWish] = useState(false);

  useEffect(()=>{
    const index = wishList.indexOf(props.index);
    if(index>-1)setWish(true);
  },[]);

  const [display, setDisplay] = useState("none");

  let navigate = useNavigate();

  const showButton = (e) => {
    e.preventDefault();
    setDisplay("flex");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("none");
  };

  const takeWishAction = () => {
    if(wish) setWishList(wishList.filter(obj => obj!=props.index));
    else setWishList(arr => [...arr,props.index]);
    setWish(!wish);
  };

  const handleClick = () => {
    console.log(props.index);
    navigate("/myntra-demo/product/"+props.index);
  };

  return (
    <div
      style={{ maxWidth: 250, maxheight: 500 }}
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <Card
        
        sx={{
          m: "10px",
        }}
      >
        <CardActionArea>
          <CCarousel onClick={handleClick} interval={false} controls indicators>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={a}
                alt="slide 1"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={b}
                alt="slide 2"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={c}
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
          <CardContent>
            <Button
              sx={{
                m: "5px",
                display: { display },
                width: "100%",
              }}
              style={{ color: "#ff003c" }}
              variant={wish ? "contained" : "outlined"}
              startIcon={
                wish ? (
                  <Favorite style={{ color: "#ff003c" }} />
                ) : (
                  <FavoriteBorder />
                )
              }
              onClick={takeWishAction}
            >
              Wishlist
            </Button>
            <Box>
              <Typography gutterBottom variant="h6" component="div">
                <b>{props.brand}</b>
              </Typography>
              <Typography>{props.title}</Typography>
              <Typography>size {props.size.join(" ")}</Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Rs. {props.price}</b>
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ActionAreaCard;
