import React from "react";
import ProductItem from "../components/ProductItem";

const PRODUCTDATA = [
  {
    id: 1,
    title: "M1 Mac Studio",
    price: 1999,
    totalQuantity: 5,
  },
  {
    id: 2,
    title: "MacBook Air M2",
    price: 1199,
    totalQuantity: 15,
  },
  {
    id: 3,
    title: "Mac mini",
    price: 999,
    totalQuantity: 10,
  },
];

const Products = () => {
  return (
    <>
      {PRODUCTDATA.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default Products;
