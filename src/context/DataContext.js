import { createContext, useEffect, useState } from "react";

import Data from "../data.json";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState(Data);

  const [wishList, setWishList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [gender, setGender] = useState("All");
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  const [itemList, setItemList] = useState(data);

  useEffect(() => {
    //console.log(gender, categoryList, brandList);
    setItemList(
      data.filter((obj) => {
        if(search.length == 0 || obj.title.toLowerCase().includes(search.toLowerCase()) || obj.brand.toLowerCase().includes(search.toLowerCase()) || obj.Gender.toLowerCase().includes(search.toLowerCase()) || obj.Category.toLowerCase().includes(search.toLowerCase())){
          if (gender == "All" || obj["Gender"].toLowerCase() == gender.toLowerCase()) {
            const catIndex = categoryList.indexOf(obj["Category"].toLowerCase());
            if (categoryList.length == 0 || catIndex > -1) {
              const braIndex = brandList.indexOf(obj["brand"].toLowerCase());
              if (brandList.length == 0 || braIndex > -1) return true;
            }
          }
        }
        
        return false;
      })
    );
  }, [gender, categoryList, brandList, search]);

  useEffect(()=> {
    let arr = [...itemList];
    arr.sort((a,b)=>{
      if(sortBy=='price') return a.Price - b.Price;
      else return a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1;
    })
    setItemList(arr);
  },[sortBy]);

  return (
    <DataContext.Provider
      value={{
        data,
        itemList,
        wishList,
        gender,
        categoryList,
        brandList,
        sortBy,
        search,
        cartList,
        setCartList,
        setSearch,
        setSortBy,
        setGender,
        setCategoryList,
        setWishList,
        setBrandList,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
