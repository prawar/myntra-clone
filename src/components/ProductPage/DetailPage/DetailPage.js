import { Button, Stack, Box, Typography } from "@mui/material";
import { ShoppingBag, ArrowForwardIos } from "@mui/icons-material";

import { useContext, useEffect, useState } from "react";

import { DataContext } from "../../../context/DataContext";

const DetailPage = (props) => {
  const { cartList, setCartList, itemList } = useContext(DataContext);
  const [item, setItem] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState(null);

  const [cart, setCart] = useState(false);

  useEffect(() => {
    setItem(
      itemList.filter((obj) => {
        if (obj.id == props.index) {
          console.log(obj);
          setSizes(obj.size);
          return true;
        }
        return false;
      })
    );

    const index = cartList.indexOf(props.index);
    if (index > -1) setCart(true);
  }, []);

  const takeCartAction = () => {
    if (cart) setCartList(cartList.filter((obj) => obj != props.index));
    else setCartList((arr) => [...arr, props.index]);
    setCart(!cart);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {item.length > 0 ? (
        <Box sx={{ m: "20px", p:'10px', borderBottom: 2, borderColor:'#b3b3b3' }}>
          <Typography variant="h3">{item[0].brand}</Typography>
          <Typography>{item[0].title}</Typography>
          <Typography sx={{ fontWeight: "bold", color: "#000" }}>
            Rs.{item[0].Price}
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      <Box sx={{ m: "20px" }}>
        <Typography>Select Size</Typography>
        <Stack spacing={3} direction="row" sx={{ m: "20px" }}>
          {sizes.map((str) => (
            <Button
              variant="outlined"
              sx={{ borderRadius: "100%" }}
              variant={size == str ? "contained" : "outlined"}
              onClick={(e) => setSize(str)}
            >
              {str}
            </Button>
          ))}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            sx={{
              width: "100%",
              mr: "10px",
              "&:hover": { backgroundColor: "#ffe159", color: "#ff3f6c" },
              backgroundColor: "#ff3f6c",
              color: "#ffe159",
            }}
            variant="contained"
            endIcon={<ArrowForwardIos />}
          >
            Go to Cart
          </Button>
          <Button
            sx={{
              width: "100%",
              ml: "10px",
              color: "#ff3f6c",
              borderColor: "#ff3f6c",
              "&:hover": { backgroundColor: "#ffe159", color: "#ff3f6c" },
            }}
            onClick={takeCartAction}
            variant={cart ? "contained" : "outlined"}
            startIcon={<ShoppingBag />}
          >
            {cart ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailPage;
